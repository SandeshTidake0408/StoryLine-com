import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

connectDB()
	.then((res) => {
		app.listen(process.env.PORT || 5000, () => {
			console.log(`Server is running on port : ${process.env.PORT}`);
		});
	})
	.catch((error) => {
		console.log("MONGODB Connection fail !! ", error);
	});
