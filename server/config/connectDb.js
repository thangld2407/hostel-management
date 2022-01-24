//lets require/import the mongodb native drivers.
const mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/managehostel';


try {
  mongoose.connect(url)
  console.log('Connect success');
} catch (err) {
  console.log(err);
}