import mongoose from 'mongoose'

let isConnected = false // track the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL)return console.log('No MongoDB URL');

    if(isConnected) return console.log('Already connected');

    try{
        await mongoose.connect(process.env.MONGODB_URL)
        isConnected = true
        console.log('Connected to MongoDB')
    } catch (error){
        console.log(error)
    }
}