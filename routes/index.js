var express = require('express');
var router = express.Router();


const fileUploader = require('../middleware/multer');

const { signupGetController,
  signupPostController,
  loginGetController,
  loginPostController,
  uploadGetController, 
  uploadPostController,
  videoGetController

} = require('../controllers/auth.controllers');


const {isLoggedIn, isAnon, isPublic, isOwner} = require('../middleware/auth.middlewares');

/* GET home page. */
router.get('/', isPublic, function(req, res, next) {
  res.render('index');
});

router.get('/signup', isAnon, signupGetController);

router.post('/signup', isAnon, signupPostController);

router.get('/login', isAnon, loginGetController);

router.post('/login', isAnon, loginPostController);

router.get('/upload', isLoggedIn, uploadGetController);

router.post('/upload', isLoggedIn, fileUploader.single('myVideo'), uploadPostController)

router.get('/videos', isLoggedIn, videoGetController)

router.get('/logout', isLoggedIn, (req, res, next) => {
  req.session.destroy(() => {
      res.redirect('/')
  });
})


module.exports = router;
