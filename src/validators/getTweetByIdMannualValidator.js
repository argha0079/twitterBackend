import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";

export const getTweetByIdManualValidator = (req, res, next) => {
    const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);
    if(!isValidId) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: 'Invalid tweet id'
        });
    }

    next();
}