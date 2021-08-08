const express = require('express');
const app = express();
const port = 8000;

require('custom-env').env(true);

app.use(express.json());

console.log(process.env.DATABASE_URL);

app.get('/', (req, res) => {
  res.json({ message: 'alive' });
});

app.listen(port, () => {
  console.log(`Server ist listening on ${port}`);
});
