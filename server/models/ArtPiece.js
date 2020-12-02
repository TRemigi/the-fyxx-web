const { Schema, model } = require("mongoose");

const artPieceSchema = new Schema({
  artist: {
    type: Schema.Types.ObjectId,
    ref: "Artist",
  },
  pieceName: {
    type: String,
    required: true,
    trim: true,
    default: "Unnamed Artwork",
  },
  image: {
    type: Schema.Types.ObjectId,
    ref: "Image",
  },
  media: {
    type: String,
    required: true,
    trim: true,
  },
  dimensions: {
    type: String,
    required: true,
    trim: true,
  },
  favoritedBy: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  price: {
    type: Number,
    required: false,
  },
});

const ArtPiece = model("ArtPiece", artPieceSchema);

module.exports = ArtPiece;
