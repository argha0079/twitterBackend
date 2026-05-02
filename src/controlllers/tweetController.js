import { StatusCodes } from "http-status-codes";
import { successResponse, errorResponse } from "../utils/responses.js";
import { createTweetService, getTweetService, getTweetByIdService, deleteTweetService, updateTweetService } from "../services/tweetService.js";

export async function createTweet(req, res, next) {
  try {
    const tweet = await createTweetService({
      caption: req.body.caption,
      imageBuffer: req.file?.buffer,   // ← pass the raw file buffer
      mimetype: req.file?.mimetype, 
    })
    return successResponse(tweet, StatusCodes.CREATED, "Tweet Creation Successfull", res)
  } catch (error) {
    return errorResponse(error, res)
  }
}

export const getTweets = async (req, res) => {
  try {
      const response = await getTweetService();
      console.log(response);
      return successResponse(response, StatusCodes.OK, 'Tweets fetched successfully', res);
  } catch(error) {
      console.log(error);
      return errorResponse(error, res);
  }
}

export const getTweetById = async (req, res) => {
  try {
      const response = await getTweetByIdService(req.params.id);

      return successResponse(response, StatusCodes.OK, 'Tweet fetched successfully', res);
  } catch(error) {
      return errorResponse(error, res);
  }
}

export const deleteTweet = async (req, res) => {
  try {
      const response = await deleteTweetService(req.params.id);
      return successResponse(response, StatusCodes.OK, 'Tweet deleted successfully', res);
  } catch (error) {
      return errorResponse(error, res);
  }
}

export const updateTweet = async (req, res) => {
  try {
      const response = await updateTweetService(req.params.id, req.body.caption);
      return successResponse(response, StatusCodes.OK, 'Tweet updated successfully', res);
  } catch(error) {
      return errorResponse(error, res);
  }
}
