#!/bin/sh
set -e

echo 'Database init'

psql -U $POSTGRES_USER -d $POSTGRES_DB < /dump/pagila-schema.sql
echo 'pagila-schema.sql executed'
psql -U $POSTGRES_USER -d $POSTGRES_DB < /dump/pagila-insert-data.sql
echo 'pagila-insert-data.sql executed'
psql -U $POSTGRES_USER -d $POSTGRES_DB < /dump/pagila-data.sql
echo 'pagila-data.sql executed'

echo 'Database init finished successfully'
