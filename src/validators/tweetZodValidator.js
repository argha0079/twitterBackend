import { StatusCodes } from "http-status-codes";

export const validate = (schema) => {
    // it returns a validating middleware
    return async function middleware(req, res, next) {
        try {
            // console.log(req.body);
            schema.parse(req.body);
            next();
        } catch(error) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                error: error.errors,
                success: false,
                message: "Zod Validation failed"
            });
        }
    }
}