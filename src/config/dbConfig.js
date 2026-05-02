import mongoose from "mongoose";
import { DB_URI } from "./envConfig.js";

async function connectDb () {
    await mongoose.connect(DB_URI)
    console.log("DB connection successfull!!")
}

export default connectDb;