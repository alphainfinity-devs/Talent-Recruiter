const recruiterRoleChecker = (req, res, next) => {
    try {
      const { role } = req.headers || {};
      switch (role) {
        case "recruiter":
          return next();
        default:
          next("authorization failed");
      }
    } catch (error) {
      console.log("error role authorization", error);
      next("authorization failed" + error);
    }
  };
  
  module.exports = recruiterRoleChecker;
  