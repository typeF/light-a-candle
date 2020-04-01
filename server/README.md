### Setup

## Start server

Add database.env file with the following fields:

```
POSTGRES_USER=postgres
POSTGRES_PASSWORD=123
POSTGRES_DB=candle
```

Install docker-compose

Run server

```
docker-compose up -d
```

## Seed database

Seed database

```
npx sequelize-cli db:seed:all
```

## Model creation

Candle

```
npx sequelize-cli model:generate Candle --attributes name:string,message:string(600)
```
