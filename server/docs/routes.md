# Routes

## /candles

```
GET  / Get all candles
POST / Save candle - {name: "john" message: "Thank you!"}
```

## /tributes

```
GET  /:id Get specific tribute
POST /    Save tribute
```

## /location

```
GET  /pins     Get all pins
POST /pins     Save pin
GET  /tributes Get all tributes in a location, must pass in city, province and country as query parameter
```
