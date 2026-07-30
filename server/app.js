const express = require('express');
const app = express();

const port = process.env.PORT || 3000

//Routes
const itemRoutes = require("./routes/routes");

app.use(express.json());

//Routes
app.use("/Clothes", itemRoutes);

app.get('/', (req, res) => {
  res.send('Root Route /');
});

app.listen(port, () => console.log(`Listening on ${port}.`));