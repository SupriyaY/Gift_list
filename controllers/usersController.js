const express = require('express')
const router = express.Router()

const User = require('../models/user')
const Item = require('../models/item')

// USERS INDEX ROUTE
router.get('/', (req, res) => {
    User.find()
        .then(users => {
            console.log(users);
            res.send(users);
        })
        .catch(err => {
            console.log(err)
        })

});


// USER SHOW ROUTE
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            console.log(user);
            res.send(user)
        })
        .catch(err => {
            console.log(err)
        })

});




// USER CREATE ROUTE
router.post('/',(req, res) => {
const user = new User({
first_name: req.body.first_name,
email: req.body.email,
items: req.body.items
});
if (!user.photo_url) {
    user.photo_url = 'https://i.imgur.com/xln20Nb.jpg?1'
}
User.create(user)
.then(() => {
  res.redirect('/users')
})
.catch((error) => {
  console.log(error)
})
})


// USER UPDATE ROUTE

// USER DESTROY

// ADD A NEW ITEM

// REMOVE AN ITEM

module.exports = router