import Tweet from "../dbModels/tweet.model.js";
import mongoose from "mongoose";

export async function createTweetRepository({ caption, image }) {
    try {
        const tweet = await Tweet.create({ caption, image });
        return tweet;
    } catch (error) {
        throw error;
    }
}

export async function getTweetRepository() {
    try {
        const tweet = await Tweet.find();
        return tweet;
    } catch (error) {
        throw error;
    }
}

export async function getTweetByIdRepository(tweetId) {
    try {
        const tweet = await Tweet.findById(tweetId);
        return tweet;
    } catch (error) {
        throw error;
    }
}

export async function deleteTweetRepository(tweetId) {
    try {
        const tweet = await Tweet.findByIdAndDelete(tweetId);
        return tweet;
    } catch (error) {
        throw error;
    }
}

export async function updateTweetRepository(tweetId, caption) {
    try {
        const tweet = await Tweet.findByIdAndUpdate(tweetId, { body }, { new: true });
        return tweet;
    } catch (error) {
        throw error;
    }
}

