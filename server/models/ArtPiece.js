const { Schema, model } = require("mongoose");
const Artist = require("./Artist");
const Image = require("./Image");

const artPieceSchema = new Schema({
  artist: [Artist.schema],
  name: {
    type: String,
    required: true,
    trim: true,
    default: "unnamed",
  },
  image: [Image.schema],
  media: {
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
