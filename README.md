# Bands I have seen

> this is a tag

This idea kind of started as something I could bring together for me and my friends. We were slowly forgetting what bands we had seen, where we had seen them and when. So I came up with this website, a place thats not difficult to get to, one that loads quickly and doesn't require any downloading of excel spreadsheets or uploading of any stuff to some sharepoint.

This site is limited in functionality but the concept is there, it is also a platform for me to mess about with ideas and general coding stuff so dont take it too seriously.

If you want to mess about with it yourself, tear it down and laugh at my mistakes... go ahead... here's how to do it;

# Steps

- `git clone the repo`
- `npm install`
- `nodemon index.js` (I suggest using nodemon to run the server if you're going to be changing stuff)

## You will also need mongoDB

... but there is test data located in `database_config/`

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
