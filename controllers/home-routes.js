const router = require('express').Router();
const sequelize = require('../config/connection');
const { Exercise, User, Workout, WorkoutTracker } = require('../models');




router.get('/', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('homepage');
  });

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

router.get('/workout/:id', (req, res) => {
    Workout.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'workout_name',
        ],
        include: [
            {
                model: Exercise,
                attributes: ['workout_id', 'exercise_name', 'num_sets', 'num_reps' ]
            },
        ]
    })
    .then(dbWorkoutData => {
        if (!dbWorkoutData) {
            res.status(404).json({ message: 'No workout found with this id' });
            return;
        }

        const workout = dbWorkoutData.get({ plain: true });

        WorkoutTracker.create({
            workout_id: dbWorkoutData.id,
            user_id: req.session.user_id
        })

        res.render('workout', {
            workout,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



  
  module.exports = router;