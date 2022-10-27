const roleAuthCheck = (req, res, next) => {
  try {
    const { role } = req.headers || {};
    console.log('Hello role', role);
    switch (role) {
      case "admin":
        return next();
      case "recruiter":
        return next();
      case "applicant":
        return next();
      default:
        next("authorization failed");
    }
  } catch (error) {
    console.log("any error authorization", error);
    next("authorization failed" + error);
  }
};

module.exports = roleAuthCheck;
