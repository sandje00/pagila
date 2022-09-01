# Pagila

This repo contains code for query optimisation related research demonstrated on sample Postgres [Pagila database](https://www.postgresql.org/ftp/projects/pgFoundry/dbsamples/pagila/).

## How to Run the Project

### Prerequisites

- Docker
- Docker Compose

### Run the Project

1. Create `.env` file inside the root folder and provide info following the example set in `.env.example`

2. Run the following command in the terminal:

```
docker-compose up --build
```

## Changes to Pagila DB

In order for scripts to work in dockerized environment, few changes needed to be introduced.

1. Files renamed in the following fashion:

```
pagila-schema.sql => 01-pagila-schema.sql
pagila-data.sql => 02-pagla-data.sql
```

It was necessary to rename files like this so they can be executed in proper order on Postgres container creation.

2. File `pagila-insert-data.sql` was removed because it contains insertion of duplicate data which after its execution causes unique constraint violation error in `pagila-data.sql` execution. In addition, all of the data and definitions in `pagila-insert-data.sql` are included in `pagila-data.sql`.

3. In `pagila-schema.sql` (i. e. `01-pagila-schema.sql`) on line 22 the change is the following:

```sql
-- CREATE PROCEDURAL LANGUAGE plpgsql;

CREATE USER postgres SUPERUSER;
```

This change was necessary because of the "extension alerady exists" error for `CREATE PROCEDURAL LANGUAGE plpgsql;`. `CREATE USER postgres SUPERUSER;` was necessary for execution of the following lines.
