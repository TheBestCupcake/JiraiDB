const express = require('express');
const app = express();

const cors = require('cors');

const helmet = require('helmet');
const argon2 = require("argon2");
var session = require('express-session');


const port = process.env.PORT || 3000

//Routes
const itemRoutes = require("./routes/itemRoutes");
const authRoutes = require('./routes/authenticationRoutes');

//Setup
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(helmet());

//Login testing
app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'shhhh, very secret'
}));

/*
const users = {
  tj: {
    name: "tj",
    passwordHash: null,
  },
};

// Create the password hash when setting up the test user
async function setupUser() {
  users.tj.passwordHash = await argon2.hash("foobar", {
    type: argon2.argon2id,
  });
}
setupUser();

async function authenticate(username, password) {
  const user = users[username];

  if (!user || !user.passwordHash) {
    return null;
  }

  const valid = await argon2.verify(user.passwordHash, password);

  return valid ? user : null;
}

//Used as an argument inside of the /restricted path.
function restrict(req, res, next) {
  if (req.session.user) {
    return next();
  }

  res.status(401).json({
    success: false,
    message: "Authentication required",
  });
}

app.get("/restricted", restrict, (req, res) => {
  res.json({
    message: "You have access to the restricted area.",
    user: req.session.user,
  });
});

app.post("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      return next(err);
    }

    res.json({
      success: true,
      message: "Logged out successfully",
    });
  });
});

app.post("/login", async (req, res, next) => {
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
});

*/

//Routes
app.use("/Clothes", itemRoutes);
app.use("/Auth", authRoutes);

app.get('/', (req, res) => {
  res.send('Root Route /');
});

app.listen(port, () => console.log(`Listening on ${port}.`));