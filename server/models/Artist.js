const { Schema, model } = require("mongoose");

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
  favoritedBy: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Artist = model("Artist", artistSchema);

module.exports = Artist;
