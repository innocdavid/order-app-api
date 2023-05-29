import mongoose from "mongoose";

const coverImageSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },

  name: {
    type: String, 
    required: true,
  },

  url: {
    type: String,
    required: true,
  }
}, { timestamps: true })

const CoverImage = mongoose.model('CoverImage', coverImageSchema);

export default CoverImage;