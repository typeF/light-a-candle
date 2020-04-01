# Database Setup

1. Start Database
2. Create tables
3. Seed database

### Start database

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

### Create tables

```
npx sequelize-cli db:migrate
```

### Seed database

```

npx sequelize-cli db:seed:all

```

# Misc

## Stop database

Server stops but data persists

```

docker-compose down

```

Server stops and data is deleted

```

docker-compose down --volumes

```

## Model creation

Candle

```

npx sequelize-cli model:generate --name Candle --attributes name:string,message:string(600)

```

Location

```

npx sequelize model:generate --name Location --attributes longitude:float,latitude:float,city:string,province:string,country:string

```

Tribute

```

npx sequelize-cli model:generate --name Tribute --attributes firstName:string,middleName:string,lastName:string,picture:text,dob:date,dod:date,tribute:string,title:string,workplace:string,city:string,province:string,country:string

```
