const mongoose = require("mongoose");

module.exports = {
  ConnectionToMongoDatabase: () => {
    mongoose.connect(process.env.CLOUD_DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    mongoose.connection
      .on("connected", () => {
        console.log(
          "--------------- Connection to Mongo Database Successfuly ---------------"
        );
      })
      .on("error", (err) => {
        console.error("------ Error : " + err);
      })
      // When the connection is disconnected:
      .on("disconnected", function () {
        console.log(
          "--------------- Connection to Mongo Database Closed ---------------"
        );
      });

    // If the Node process ends, close the Mongoose connection:
    process.on("SIGINT", function () {
      mongoose.connection.close(() => {
        console.log(
          "Mongoose default connection disconnected through app termination"
        );
        process.exit(0);
      });
    });
  },
};
//mongod --dbpath C:\Users\User\Desktop\ecommerce-mongo27001 --port 27020
