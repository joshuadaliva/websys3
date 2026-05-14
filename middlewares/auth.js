function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  }
  const path = req.originalUrl;
  if (path.startsWith('/admin')) return res.redirect('/admin/login');
  if (path.startsWith('/collector')) return res.redirect('/collector/login');
  if (path.startsWith('/vendor')) return res.redirect('/vendor/login');
  return res.redirect('/');
}

function isAdmin(req, res, next) {
  if (req.session && req.session.user && req.session.user.role === 'admin') {
    return next();
  }
  return res.redirect('/admin/login');
}

function isCollector(req, res, next) {
  if (req.session && req.session.user && req.session.user.role === 'collector') {
    return next();
  }
  return res.redirect('/collector/login');
}

function isVendor(req, res, next) {
  if (req.session && req.session.user && req.session.user.role === 'vendor') {
    return next();
  }
  return res.redirect('/vendor/login');
}

function attachUser(req, res, next) {
  res.locals.user = req.session ? req.session.user : null;
  next();
}

module.exports = { isAuthenticated, isAdmin, isCollector, isVendor, attachUser };
