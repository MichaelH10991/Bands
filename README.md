# Bands I have seen

This project is mostly a learning thing and a place to practice and break things whilst also being a functional solution to a relatively mundaine problem.

# Steps

- `git clone git@github.com:MichaelH10991/Bands.git`
- `npm install`

To run the application in development mode, run;

- `npm run dev`

then run the database

- `mongod`

## Set up mongoDB

> Test data is located in `database_config/`

Download and set up MongoDB by following this handy [guide](https://treehouse.github.io/installation-guides/mac/mongo-mac.html).

edit the `config.js` to include your own variables

```javascript
module.exports = {
  database_url: "mongodb://localhost:27017/bandsDB",
  database_name: "bandsDB",
  collection_name: "bands"
}
```

- `node create_database.js`
- `node test_data.js`

blah blah
