require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

const dbConnection = require('./database/config');

const port = 3000;
// Cors
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/v1', require('./routes/user'));

// Connect to database
dbConnection();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
