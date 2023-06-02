import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import categories from "./data/categories.js";
import User from "./models/users.js";
import Category from "./models/categoryMode.js";
import dbConnection from "./config/db.js";

dotenv.config();
dbConnection();

const importData = async () => {
  try {
    await Category.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleCategories = categories.map(category => {
      return { ...category, user: adminUser, category };
    });

    await Category.insertMany(sampleCategories);

    console.log('Data Imported: '.green.inverse.bold);
    process.exit();

  } catch (err) {
    console.error(`${err.message}`.red.inverse);
    process.exit(1);
  }
}

const destroyData = async () => {
  try {
    await Category.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed: '.red.inverse.bold);
    process.exit();

  } catch (err) {
    console.error(`${err.message}`.red.inverse);
    process.exit(1);

  }
}

if(process.argv[2] === '-d'){
  destroyData();
} else {
  importData();
}