import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: String, required: true },
  comment: { type: String, required: true },
}, { timestamps  : true })

const dishSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },

  name: {
    type: String, 
    required: true,
  },
  
  price: {
    type: Number,
    required: true,
  },
  
  category: {
    type: String,
    required: true,
  },

  cookingDuration: {
    type: String,
    required: true,
  },

  sizes:[],

  imageUrl: {
    type: String,
    required: true,
  },

  ingredients: [],

  nuitrients: [],

  rating: {
    type: Number,
    required: false,
  },

  reviews: [reviewSchema],

}, { timestamps: true })

const Dish = mongoose.model('Dish', dishSchema);

export default Dish;