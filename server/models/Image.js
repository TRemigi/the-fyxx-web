// https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/

const { Schema, model } = require("mongoose");

const imageSchema = new Schema({
  artPiece: {
    type: Schema.Types.ObjectId,
    ref: "ArtPiece",
  },
  img: {
    data: Buffer,
    contentType: String,
  },
});

const Image = model("Image", imageSchema);

module.exports = Image;
