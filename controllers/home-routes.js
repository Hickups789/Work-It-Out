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
router.get('/selectworkout', (req, res) => {
  if (req.session.loggedIn) {
    res.render('selectWorkout');
    return;
  }

  res.redirect('/')
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
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
        const exercises = dbWorkoutData.exercises.map(exercises => exercises.get({ plain: true }));

        /*console.log(workout)
        console.log(exercises)

        /*WorkoutTracker.create({
            workout_id: dbWorkoutData.id,
            user_id: req.session.user_id
        })*/

        res.render('workout', {
            workout,
            exercises,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



  
  module.exports = router;