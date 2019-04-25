const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'));
app.set("view engine", "hbs");
app.set('views', './views');

const usersController = require('./controllers/usersController.js')
app.use('/', usersController)

// Mongoose stuff
const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/express-mongoose-lesson-starter', { useNewUrlParser: true })


if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
}
else {
  mongoose.connect('mongodb://localhost/express-mongoose-lesson-starter', { useNewUrlParser: true });
}
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
  }
);
mongoose.connection.once('open', function() {
  console.log("Mongoose has connected to MongoDB!");
});

// Now that we're connected, let's save that connection to the database in a variable.
const db = mongoose.connection

//Will log an error if db can't connect to MongoDB
db.on('error', function (err) {
  console.log(err)
})

//Will log "database has been connected" if it successfully connects.
db.once('open', function () {
  console.log('database has been connected!')
})

app.listen(3000, function () {
  console.log('app listening on port 3000')
})