const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express-mongoose-lesson-starter');

const User = require('../models/user');
const Item = require('../models/item');

// Use native promises
mongoose.Promise = global.Promise;

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
  photo_url: 'https://imgur.com/P1qQJGz',
  items: [{ name: "Diamond earring"}]
});

const mona = new User({
  first_name: 'Mona',
  email: 'mona@gmail.com',
  photo_url: 'https://imgur.com/3oRYqUP',
  items: [{ name: "Louis Vuitton bag"}]
});

const niya = new User({
  first_name: 'Niya',
  email: 'niya@gmail.com',
  photo_url: 'https://imgur.com/JBCJIso',
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