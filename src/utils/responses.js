import { StatusCodes } from "http-status-codes"

export function successResponse(data, statusCode, message, res) {
    return res.status(statusCode).json({
        success: true,
        data,
        message
    })
}

export function errorResponse (error, res) {
    console.log(error)
    if(error.status) {
        return res.status(error.status).json({
            success: false,
            message: error.message,
        })
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Internal Server Error"
    })
}