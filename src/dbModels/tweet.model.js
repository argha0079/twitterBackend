import mongoose from "mongoose";

const tweetSchema = mongoose.Schema({
    caption: {
        type: String,
        trim: true,
        default: null,
    }, 
    image: {
        type: String,
        default: null
    }
}, { timestamps: true })

const Tweet = mongoose.model("Tweet", tweetSchema);

export default Tweet;