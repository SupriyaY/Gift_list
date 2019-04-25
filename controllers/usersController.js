const express = require('express')
const router = express.Router()

const User = require('../models/user')
const Item = require('../models/item')

// USERS INDEX ROUTE
router.get('/users', (req, res) => {
    User.find()
        .then(users => {
            console.log(users);
            res.render('users/index', {users});
        })
        .catch(err => {
            console.log(err)
        })

});

// add USERS TO EVERYTHIN 
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
const newUser = req.body
if (!newUser.photo_url) {
    newUser.photo_url = 'https://i.imgur.com/GNbsodM.jpg?1'
}
User.create(newUser)
.then(() => {
  res.redirect('/users')
})
.catch((error) => {
  console.log(error)
})
})


// USER EDIT ROUTE
router.get('/:id/edit', (req, res) => {
    User.findById(req.params.id)
    .then((err, user) => {
        if(err){
            return;
        } 
     res.send(user)
    });
});


//UPDATE
    router.put('/:id', function(req, res) {
        User.findByIdAndUpdate(req.params.id, req.body, {new: true})   
        .then(()=> {
          console.log(user);
          res.send(users);
        });
      });
      

// USER DESTROY

router.delete('/:id', (req, res) => {
User.findOneAndRemove(request.params.id)
.then (() => {
    res.send(users)
})
.catch((error) => {
    console.log(error)
})
});


// )

// ADD A NEW ITEM

// REMOVE AN ITEM

module.exports = router