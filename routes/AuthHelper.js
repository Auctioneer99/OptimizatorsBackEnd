function authorized(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.status(401).json({
      message: "Not authorized",
    });
  }
}

function notAuthorized(req, res, next) {
  if (!req.user) {
    next();
  } else {
    res.status(403).json({
      message: "Already authorized",
    });
  }
}

export default {
  authorized: authorized,
  notAuthorized: notAuthorized,
};
