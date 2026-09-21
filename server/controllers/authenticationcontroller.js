
exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
    
        if (!username || !password) {
          return res.status(400).json({
            success: false,
            message: "Username and password are required",
          });
        }
    
        const user = await authenticate(username, password);
    
        if (!user) {
          return res.status(401).json({
            success: false,
            message: "Invalid username or password",
          });
        }
    
        req.session.regenerate((err) => {
          if (err) {
            return next(err);
          }
    
          req.session.user = {
            name: user.name,
          };
    
          res.json({
            success: true,
            message: "Login successful",
          });
        });
      } catch (err) {
        next(err);
      }
}

exports.logout = async (req, res) => {
    req.session.destroy((err) => {
    if (err) {
      return next(err);
    }

    res.json({
      success: true,
      message: "Logged out successfully",
    });
  });
}

exports.signup = async (req, res) => {
    
}