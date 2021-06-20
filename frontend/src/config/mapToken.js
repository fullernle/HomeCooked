if (process.env.NODE_ENV === "production") {
  module.exports = require("./mapTokenProd");
} else {
  module.exports = require("./mapTokenDev");
}