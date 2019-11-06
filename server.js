const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://user:2829ehl@ds241298.mlab.com:41298/heroku_666qq26r",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);
// mongoose.connect(process.env.MONGODB_URI || " mongodb://localhost/reactcatlist", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

// mongodb://localhost/reactcatlist
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
