const express = require("express");
const app = express();
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const businesses = require("./routes/api/businesses");
const products = require("./routes/api/products");
const reviews = require("./routes/api/reviews");
const carts = require("./routes/api/carts");

const bodyParser = require("body-parser");
const passport = require("passport");

const db = require("./config/keys").mongoURI;
const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.use("/api/businesses", businesses);
app.use("/api/users", users);
app.use("/api/products", products);
app.use("/api/business", reviews);
app.use("/api/carts", carts);

app.use(passport.initialize());
require("./config/passport")(passport);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));


