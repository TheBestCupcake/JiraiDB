const express = require('express');
const app = express();

const port = process.env.PORT || 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Root Route /');
});

app.listen(port, () => console.log(`Listening on ${port}.`));{port}.`));