module.exports = {
  database: process.env.MONGODB_URI || process.env.DATABASE_URL,
  secret: 'yoursecret'
}