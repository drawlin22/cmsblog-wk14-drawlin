const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get all current blog posts
router.get('/', withAuth, (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id
    },
  
    order: [['created_at', 'DESC']],
    include: [{ all: true, nested: true }]
  
  })
  .then(dbPostData => {
    //serialize the data before passing to the template
    const posts = dbPostData.map(post => post.get({ plain: true }));
    res.render('dashboard', { posts, loggedIn: true });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/blogpost/:id', withAuth, async (req, res) => {
  try {
    const blogpostData = await Post.findByPk(req.params.id, {
      include: [
        {
         all: true, nested:true
        },
      ],
    });

    const blogpost = blogpostData.get({ plain: true });

    res.render('blogpost', {
      ...blogpost,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blogroutes/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('editDelete', {
        // layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});




//get a single post
// router.get('/blogpost/:id', withAuth, (req, res) => {
//   Post.findOne({
//     where: {
//       id: req.params.id
//     },
//     attributes: ['id', 'title', 'post_text', 'created_at'],
//     include: [
//       {
//         include: [{ all: true, nested: true }]
//       },
//     ]
//   })
//     .then(dbPostData => {
//       if (!dbPostData) {
//         res.status(404).json({ message: 'No post found with this id' });
//         return;
//       }
//       //serialize the data
//       const post = dbPostData.get({ plain: true });
//       // pass to the template
//       res.render('edit-post', {
//         post,
//         loggedIn: req.session.loggedIn
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.get('/new', (req, res) => {
//   res.render('new-post');
// });


module.exports = router;