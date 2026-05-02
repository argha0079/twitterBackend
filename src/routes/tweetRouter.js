import { Router } from "express";
import { getTweets } from "../controlllers/tweetController.js";
const tweetRouter = Router();

tweetRouter.get("/", getTweets);

export default tweetRouter;