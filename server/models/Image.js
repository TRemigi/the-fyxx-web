// https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/

const { Schema, model } = require("mongoose");

const imageSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  artPiece: {
    type: Schema.Types.ObjectId,
    ref: "ArtPiece",
  },
});

const Image = model("Image", imageSchema);

module.exports = Image;
