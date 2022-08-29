FROM postgres:14

WORKDIR /docker-entrypoint-initdb.d

EXPOSE 3000

COPY ./database/init-db.sh /
COPY ./database/*.sql /dump

CMD ["postgres"]
