import mongoose from'mongoose'

// Connect to MongoDB
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://saivardhannp:saivardhan11@cluster0.5pnt7.mongodb.net/full-stack-food-ordering-website').then(() => console.log('DB connected successfully'))
}