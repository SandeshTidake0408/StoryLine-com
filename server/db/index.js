import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const connectionInstance = await mongoose.connect(
			`${process.env.MONGODB_URI}`
		);
		console.log(
			`MongoDB Connection Successful !! DB HSOT : ${connectionInstance.connection.host}`
		);
	} catch (error) {
		console.log("MongoDB Conn error : ", error);
		process.exit(1);
	}
};

export default connectDB;
