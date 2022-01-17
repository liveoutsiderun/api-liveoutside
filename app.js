require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

const dbConnection = require('./database/config');

// Cors
app.use(cors({
  origin: 'https://api-liveoutside.herokuapp.com',
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/v1', require('./routes/user'));

// Connect to database
dbConnection();

// Puerto de sevidor local
app.set('host', process.env.HOST || '0.0.0.0');
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), app.get('host'), () => {
  /* eslint no-console: "off" */
  console.log(`server on port ${app.get('port')} ${app.get('host')}`);
});
