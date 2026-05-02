# Simple Twitter Backend (Student Project)

This is a primitive, lightweight backend application built with Node.js, Express, and MongoDB. It serves as a basic implementation of CRUD (Create, Read, Update, Delete) operations for a social media style application, specifically focusing on "Tweets."

## 🚀 Features

- **Create Tweet:** Post a new tweet with a caption and an image URL.
- **Read Tweets:** Fetch a list of all tweets or a specific tweet by ID.
- **Update Tweet:** Edit the caption of an existing tweet.
- **Delete Tweet:** Remove a tweet from the database.

## 🛠 Tech Stack

- **Node.js:** Runtime environment.
- **Express.js:** Web framework for building the API.
- **MongoDB:** NoSQL database for data storage.
- **Mongoose:** ODM (Object Data Modeling) library for MongoDB.

## 📋 Data Model (Tweet)

Each tweet object contains:

| Field | Type | Notes |
|---|---|---|
| `caption` | String | Required |
| `imageUrl` | String | Optional |
| `createdAt` | Date | Automatically generated |

## 📥 Installation & Setup

1. **Clone the repository:**
```bash
   git clone <your-repo-url>
   cd twitter-backend
```

2. **Install dependencies:**
```bash
   npm install
```

3. **Configure Environment:**

   Create a `.env` file in the root directory and add your MongoDB connection string:
```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/twitter_db
```

4. **Run the server:**
```bash
   # Using nodemon (if installed)
   npm run dev

   # Or standard node
   node index.js
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/tweets` | Get all tweets |
| `GET` | `/api/tweets/:id` | Get a single tweet by ID |
| `POST` | `/api/tweets` | Create a new tweet |
| `PUT` | `/api/tweets/:id` | Update a tweet's caption |
| `DELETE` | `/api/tweets/:id` | Delete a tweet |

### Example POST Body

```json
{
  "caption": "Hello world! This is my first tweet.",
  "imageUrl": "https://example.com/image.jpg"
}
```

## 📝 Future Improvements (Notes for Students)

- Add user authentication (Login/Register).
- Implement actual image uploading (using Multer or Cloudinary).
- Add a "Likes" or "Comments" feature.
- Input validation using Joi or `express-validator`.

## 📜 License

**MIT License**

This project is for educational purposes. Feel free to use it for your own learning!
