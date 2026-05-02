import cloudinary from '../config/cloudinaryConfig.js'

const uploadToCloudinary = (fileBuffer, folder) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, resource_type: 'auto' },
      (error, result) => {
        if (error) reject(error)
        else resolve(result)
      }
    )
    stream.end(fileBuffer)
  })
}

export default uploadToCloudinary