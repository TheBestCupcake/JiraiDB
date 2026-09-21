const express = require('express');
const app = express();

const cors = require('cors');

const helmet = require('helmet');
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

//Routes
app.use("/Clothes", itemRoutes);
app.use("/auth", authRoutes);

app.get('/', (req, res) => {
  res.send('Root Route /');
});

app.listen(port, () => console.log(`Listening on ${port}.`));