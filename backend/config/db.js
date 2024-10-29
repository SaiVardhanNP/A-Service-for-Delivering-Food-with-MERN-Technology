import mongoose from'mongoose'

// Connect to MongoDB
export const connectDB = async () => {
    await mongoose.connect('<Enter your mongodb uri here>/food_delivery_db').then(() => console.log('DB connected successfully'))
}