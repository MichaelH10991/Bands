# Bands I have seen

This project is mostly a learning thing and a place to practice and break things whilst also being a functional solution to a relatively mundaine problem.

# Steps

- `git clone git@github.com:MichaelH10991/Bands.git`
- `docker-compose up --build`

Mongo will set up a connection to the database `bandsDB` and handle any database connection errors. The database can be changed by editing the environment variables in the `.env` file.

# Archetecture

## Backend

The backend API is written in node express which hits a mongo database using mongoose. 

## Frontend

The frontend is just plain html and vanilla javascript and a bunch of onevent fetch requests to the API.

## Infrastructure

The site is hosted using Heroku.

## Development

For development this application is containerized using docker.

# REST API Reference

## Get all events

GET `api/events/`

### Parameters

N/A

### Example Response

```json
{
    "_id": "5d4e9df64a7e01001783147e",
    "name": "Flipper",
    "support": "Various",
    "city": "Bristol",
    "venue": "Exchange",
    "date": "2019-07-31T00:00:00.000Z",
    "day": "Wednesday",
    "notes": "Some notes",
    "__v": 0
  }
```

## Get a single event

GET `api/events/{name}`

### Parameters 

```json
{"name": "Flipper"}
  ```

### Example response
```json
{
    "_id": "5d4e9df64a7e01001783147e",
    "name": "Flipper",
    "support": "Various",
    "city": "Bristol",
    "venue": "Exchange",
    "date": "2019-07-31T00:00:00.000Z",
    "day": "Wednesday",
    "notes": "Some notes",
    "__v": 0
  }
```

## Create a single event
POST `api/events/`

### Parameters
```json
{
  "name": "Flipper",
  "support": "Various",  
  "city": "Bristol",
  "venue": "Exchange",
  "date": "12/04/1997",
  "day": "Wednesday",
  "notes": "Some notes"
}
```
### Example responses

- `200 OK`
- `400 Bad Request`
- `406 Not Acceptable`

## Delete an event

DELETE `api/events/{_id}`

### Parameters

```json 
{"_id": "5d4e9df64a7e01001783147e"}
```
### Example response

N/A



