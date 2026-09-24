const argon2 = require("argon2");
const { dbGetUserByUsername } = require("./usersDB");

// Create the password hash when setting up the test user
async function setupUser() {
  users.tj.passwordHash = await argon2.hash("foobar", {
    type: argon2.argon2id,
  });
}
setupUser();

exports.authenticate = async (username, password) => {
  const user = dbGetUserByUsername(username);

  if (!user || !user.passwordHash) {
    return null;
  }

  const valid = await argon2.verify(user.passwordHash, password);

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