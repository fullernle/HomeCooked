const mongoose = require("mongoose");

const db = require("./config/keys").dbURI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

mongoose.connection.on("connected", function () {
  console.log("Mongoose connected to " + db);
  if (process.env.NODE_ENV != "production") {
    const seeder = require("mongoose-seeder");
    const data = require("./data.json");
    const User = require("./models/User");
    const Business = require("./models/Business");
    const Product = require("./models/Product");
    const Review = require("./models/Review");
    const Cart = require("./models/Cart");
		console.log("HELLOOO");
    seeder
      .seed(data, { dropDatabase: false, dropCollections: true }, )
      .then((dbData) => {
        console.log("preloading Test Data");
        console.log(dbData);
      })
      .catch((err) => {
        console.log(err);
      });
		console.log("WHAT");
  }
});
