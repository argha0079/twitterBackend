import { Filter } from "bad-words"
import { StatusCodes } from "http-status-codes"
import { createTweetRepository, getTweetRepository, getTweetByIdRepository, deleteTweetRepository, updateTweetRepository } from "../repositories/tweetRepository.js"
import uploadToCloudinary from "../utils/uploadToCloudinary.js";

export async function createTweetService ({ caption, imageBuffer, mimetype }) {
    const filter = new Filter();

    if (filter.isProfane(caption)) {
        console.log(body);
        console.log(filter.clean(caption));
        throw {
            message: 'Tweet contains blocked words',
            status: StatusCodes.BAD_REQUEST
        };
    }
    let imageUrl = ""
    if (imageBuffer) {
        const result = await uploadToCloudinary(imageBuffer, "tweets");
        imageUrl = result.secure_url;
    }
    const tweet = await createTweetRepository({ caption, image: imageUrl });
    return tweet;
    
}

export async function getTweetService () {
    try {
        const tweet = await getTweetRepository();
        return tweet;
    } catch (error) {
        throw error;
    }
}

export async function getTweetByIdService (id) {
    try {
        const tweet = await getTweetByIdRepository(id);
        if(!tweet) {
            throw {
                message: 'Tweet not found',
                status: StatusCodes.NOT_FOUND
            };
        }
        return tweet;
    } catch (error) {
        throw error;
    }
}

export const deleteTweetService = async (id) => {
    const response = await deleteTweetRepository(id);
    if(!response) {
        throw {
            message: 'Tweet not found',
            status: 404
        };
    }
    return response;
}

export const updateTweetService = async (id, body) => {
    const response = await updateTweetRepository(id, body);
    if(!response) {
        throw {
            message: 'Tweet not found',
            status: 404
        };
    }
    return response;
}
