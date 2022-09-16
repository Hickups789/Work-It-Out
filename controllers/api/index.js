const router = require('express').Router();

const userRoutes = require('./user-routes.js');
/*const WorkoutRoutes = require('./post-routes');
const ExerciseRoutes = require('./comment-routes');*/

router.use('/users', userRoutes);
/*router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);*/

module.exports = router;