import dotenv from "dotenv";

dotenv.config();

export const { PORT, DB_URI,
               CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME
} = process.env;
