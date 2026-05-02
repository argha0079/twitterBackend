import { Router } from "express";
import tweetRouter from "./tweetRouter.js";
const v1Router = Router();

v1Router.use("/tweets", tweetRouter);

export default v1Router;