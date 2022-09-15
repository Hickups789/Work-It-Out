const router = require('express').Router();
const { User, Exercise, WorkoutTracker, Workout } = require('../../models');









router.post('/', (req, res) => {

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
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;