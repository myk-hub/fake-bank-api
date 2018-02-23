const express = require('express');

const app = express();

const port = process.env.PORT || 9000;

app.use(express.static('./server/static/'));
app.use(express.static('./client/dist'));

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
