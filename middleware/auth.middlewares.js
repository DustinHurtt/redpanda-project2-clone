const isLoggedIn = (req, res, next) => {
  console.log('hi line 2')
  if(!req.session.user){
    req.app.locals.isLoggedIn = true;
    res.redirect('/')
    console.log('line 6')
    return;
  }
  req.app.locals.isLoggedIn = true;
  console.log('line 9')
  next()
};

const isAnon = (req, res, next) => {
  // console.log('hi')
  if(req.session.user){
    req.app.locals.isLoggedIn = true;
    res.redirect('/')
    return;
  }
  req.app.locals.isLoggedIn = false;
  next()
};

const isPublic = (req, res, next) => {
  if(req.session.user){
    req.app.locals.isLoggedIn = true;
  } else {
    req.app.locals.isLoggedIn = false;
  }
  next()
};

module.exports = {
  isLoggedIn,
  isAnon,
  isPublic
};