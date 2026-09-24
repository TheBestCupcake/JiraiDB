const argon2 = require("argon2");
const { dbGetUserByUsername } = require("./usersDB");

exports.authenticate = async (username, password) => {
  const user = await dbGetUserByUsername(username);

  if (!user || !user.password) {
    return null;
  }

  const valid = await argon2.verify(user.password, password);

  return valid ? user : null;
}

//Used as an argument inside of restricted paths path.
exports.restrict = (req, res, next) => {
  if (req.session.user) {
    return next();
  }

  res.status(401).json({
    success: false,
    message: "Authentication required",
  });
}