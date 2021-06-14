const express = require("express");
const app = express();
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const bodyParser = require('body-parser');
const passport = require('passport');


const db = require('./config/keys').mongoURI;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(db, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

  app.use("/api/users", users);
  app.use(passport.initialize());
  require('./config/passport')(passport);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));