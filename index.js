const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const User = require('./models/user.js');
const userController = require('./controllers/users.js');
const authenticate = require('./controllers/authenticate.js');
const port = process.env.PORT || 3000;

function start() {
  const bodyparserOptions = { extended: true };
  app.use(cors());
  app.use(bodyParser.json(bodyparserOptions))
    .use(bodyParser.urlencoded(bodyparserOptions));

  app.post('/user', userController.addScore);
  app.post('/register', userController.create);
  app.post('/login', authenticate.post);
  app.listen(port, () => console.log('Crayon server listening on port 3000!'))
}

const url = 'mongodb://jeff:Password21@ds141952.mlab.com:41952/crayon-happy'
mongoose.connect(url, () => {
  console.log('Mongo connected');
  start()
})
