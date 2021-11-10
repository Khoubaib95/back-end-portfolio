const mongoose = require("mongoose");

module.exports = mongoose.model(
  "project",
  mongoose.Schema(
    {
      type: {
        type: String,
        enum: ["WEB", "MOBILE"],
        default: "WEB",
      },
      img: { type: String },
      name: { type: String },
      description: { type: String },
      task: [{ type: String }],
      technologie: [{ name: { type: String }, color: { type: String } }],
      status: { type: String },
      owner: [{ name: { type: String }, color: { type: String } }],
      website: { type: String },
      github: {
        isPrivate: { type: Boolean },
        githubLink: { type: String },
      },
    },
    { timestamps: true }
  )
);
