import { Router } from "express";
import { getTweets, createTweet, updateTweet, getTweetById, deleteTweet  } from "../controlllers/tweetController.js";
import { getTweetByIdManualValidator } from "../validators/getTweetByIdMannualValidator.js"
import upload from "../middleware/multer.js";
import { validate } from "../validators/tweetZodValidator.js"
import { tweetZodSchema } from "../validators/tweetZodSchema.js";

const tweetRouter = Router();

tweetRouter.get("/", getTweets);
tweetRouter.post("/", validate(tweetZodSchema),upload.single("image"), createTweet)
tweetRouter.get("/:id", getTweetByIdManualValidator, getTweetById);
tweetRouter.delete("/:id", deleteTweet);
tweetRouter.put("/:id", updateTweet);

export default tweetRouter;