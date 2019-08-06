module.exports = {
  database: process.env.DATABASE_URL || 'mongodb://mongo:27017/bandsDB',
  secret: 'yoursecret'
}