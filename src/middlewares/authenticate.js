require("dotenv").config();
const jwt = require("jsonwebtoken");


const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) return reject(err);
      resolve(user);
    });
  });
};
module.exports = async (req, res, next) => {
  if (!req.headers.authorization)
    return res.status(400).send({
      message: "Authorization token was not provided or was not valid 1",
    });

  if (!req.headers.authorization.startsWith("Bearer "))
    return res.status(400).send({
      message: "Authorization token was not provided or was not valid 2",
    });

  // split the bearer token and get the [1] which is the token
  const token = req.headers.authorization.split(" ")[1];

  // then we will call jwt to verify the token
  let user;

  // console.log("user")
  try {
    user = await verifyToken(token);
  } catch (err) {
    return res.status(400).send({
      message: "Authorization token was not provided or was not valid",
    });
  }
  
  // if token is valid then we will put the user retrieved from the token in the req object
  req.user = user.user;
  
  // console.log(user)
  return next();
};
