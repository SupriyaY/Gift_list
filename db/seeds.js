const mongoose = require('mongoose');
const User = require('../models/user');
const Item = require('../models/item');

// Use native promises
mongoose.Promise = global.Promise;

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
}
else {
  mongoose.connect('mongodb://localhost/example_app', { useNewUrlParser: true });
}
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
  }
);
mongoose.connection.once('open', function() {
  console.log("Mongoose has connected to MongoDB!");
});



// First we clear the database of existing users and items.
Item.remove({}, function(err){
  console.log(err);
});

User.remove({}, function(err){
  console.log(err);
});

// create new users
const supriya = new User({
  first_name: 'Supriya',
  email: 'supriya@gmail.com',
  photo_url: 'https://i.imgur.com/P1qQJGz.jpg?1',
  items: [{ name: "Diamond earring"}]
});

const mona = new User({
  first_name: 'Mona',
  email: 'mona@gmail.com',
  photo_url: 'https://i.imgur.com/3oRYqUP.jpg?2',
  items: [{ name: "Louis Vuitton bag"}]
});

const niya = new User({
  first_name: 'Niya',
  email: 'niya@gmail.com',
  photo_url: 'https://i.imgur.com/JBCJIso.jpg?1',
  items: [{ name: "Channel earrings"}]
});

// save the users
supriya.save(function(err) {
  if (err) console.log(err);

  console.log('supriya created!');
});

mona.save(function(err) {
  if (err) console.log(err);

  console.log('mona created!');
});

niya.save(function(err) {
  if (err) console.log(err);
  
  console.log('niya created!');
});