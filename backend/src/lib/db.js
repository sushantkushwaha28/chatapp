import mangoose from 'mongoose'
export const connectDB=async()=>{
    try{
        const conn = await mangoose.connect(process.env.MONGO_URI)
        console.log("MONGODB CONNECTED",conn.connection.host)
    }catch(eror){
        console.log("Error connecting to MONGODB",error)
        process.exit(1); // 1 status code means fails,0 means success
    }
}