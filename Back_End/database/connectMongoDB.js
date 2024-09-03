import mongoose from "mongoose"

const connectMongoose = (connectionString) => {
    return mongoose.connect(connectionString)
}
export default connectMongoose
