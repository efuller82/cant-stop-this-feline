const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactcatlist"
);

// catName: { type: String, required: true },
// nickname: { type: String },
// description: { type: String },
// imgURL: { type: String }, 
// upvotes: { type: Number, default: 0 },
// user: { type: String }

const catSeed = [
  {
    catName: "Midnight",
    nickname: "Sneaky Kitty",
    description:
      "Kitty likes to watch what's going on in the night!",
    imgURL: "https://i.imgur.com/SFDhlnn.png",
    user: "Jae T"
  }
];

db.Cat
  .remove({})
  .then(() => db.Cat.collection.insertMany(catSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
