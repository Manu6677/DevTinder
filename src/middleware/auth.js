const auth = (req, res, next) => {
  const token = "XYZ";
  const isAuthrized = token === "XYZ";

  console.log("middleware are in work");

  if (!isAuthrized) {
    res.status(401).send("ADMIN IS NOT AUTHENTICATED");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  const token = "XYZ";
  const isAuthrized = token === "XYZ";
  console.log("middleware are in work");

  if (!isAuthrized) {
    res.status(401).send("user IS NOT AUTHENTICATED");
  } else {
    next();
  }
};

module.exports = {
    auth,
    userAuth
}