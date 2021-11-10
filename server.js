require("dotenv").config();
var app = require("./src/app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    "--------------- Connection successfully To Port :",
    PORT,
    "---------------"
  )
);
