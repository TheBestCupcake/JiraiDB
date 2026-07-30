const express = require('express');
const app = express();

const cors = require('cors');

const port = process.env.PORT || 3000

//Routes
const itemRoutes = require("./routes/routes");

//Setup
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
}));

//Routes
app.use("/Clothes", itemRoutes);

app.get('/', (req, res) => {
  res.send('Root Route /');
});

app.listen(port, () => console.log(`Listening on ${port}.`));