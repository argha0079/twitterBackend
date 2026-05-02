import { Router } from "express";
import { getTweets, createTweet, updateTweet, getTweetById, deleteTweet  } from "../controlllers/tweetController.js";
import upload from "../middleware/multer.js";

const tweetRouter = Router();

tweetRouter.get("/", getTweets);
tweetRouter.post("/", upload.single("image"), createTweet)
tweetRouter.get("/:id", getTweetById);
tweetRouter.delete("/:id", deleteTweet);
tweetRouter.put("/:id", updateTweet);

export default tweetRouter;