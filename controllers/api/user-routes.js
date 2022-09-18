const router = require('express').Router();
const { User, Exercise, WorkoutTracker, Workout } = require('../../models');



router.post('/', (req, res) => {
 // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(foundUser => {
    if(foundUser) {
      res.status(400).json({ message: 'Email is already associated with a User!' });
      return;
    } else{
      User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
      .then(UserData => {
        req.session.save(() => {
          req.session.user_id = UserData.id;
          req.session.username = UserData.username;
          req.session.loggedIn = true;
    
          res.json(UserData);
        });
      })
    }
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/login', (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'Incorrect Email or Password!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect Email or Password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
  
      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});

module.exports = router;