const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogPostRoutes');
const commentRoutes = require('./commentRoutes')


router.use('/users', userRoutes);
router.use('/blogroutes', blogRoutes);
router.use('/commentroutes', commentRoutes);


module.exports = router;
