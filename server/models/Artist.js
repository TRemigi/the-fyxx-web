const { Schema, model } = require("mongoose");
const User = require("./User");

const artistSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  bio: {
    type: String,
    required: true,
    unique: true,
  },
  pieces: [
    {
      type: Schema.Types.ObjectId,
      ref: "ArtPiece",
    },
  ],
  favoritedBy: [User.schema],
});

const Artist = model("Artist", artistSchema);

module.exports = Artist;
