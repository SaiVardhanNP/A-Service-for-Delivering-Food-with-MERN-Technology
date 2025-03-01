import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://saivardhannp:saivardhan11@cluster0.5pnt7.mongodb.net/Food-del').then(()=>console.log("DB Connected"))
}

