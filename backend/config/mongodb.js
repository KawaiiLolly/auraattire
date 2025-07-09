import mongoose from "mongoose";
const connectDB = async () => {
    mongoose.connection.on('connected',() => {
        console.log("Database has been connected successfully!")
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/luxora`)
}

export default connectDB