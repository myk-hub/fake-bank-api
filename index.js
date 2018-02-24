const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 9000;

const app = express();

app.use(express.static('./server/static/'));
app.use(express.static('./client/dist'));

app.use(bodyParser.urlencoded({ extended: false }));

const authRoutes = require('./server/routes/auth');
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
