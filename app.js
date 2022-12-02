const express = require('express');
require('dotenv').config();
require('./models/db');
const userRouter1 = require('./routes/user');
const userRouter = require('./routes/task');

const User = require('./models/user');

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(userRouter1);
var cors = require('cors');
app.use(cors());


app.get('/test', (req, res) => {
  res.send('Hello world');
});

app.get('/', (req, res) => {
  res.json({ success: true, message: 'Welcome to backend zone!' });
});

app.listen(8000 , () => {
  console.log('port 8000 is listening');
});