const { connect, connection } = require('mongoose');

//change connection string post deployment
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/kwikPalDB';

connect(connectionString);

module.exports = connection;
