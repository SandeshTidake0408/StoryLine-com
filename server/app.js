import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";

dotenv.config({
	path: "./.env",
});

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true })); //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/", (req, res) => {
	const { title, author, content } = req.body;
	console.log(title, author, content);
	res.send("Interactive Storytelling Platform Backend Running");
	// console.log();
});

app.use("/api/v1/user", userRoutes);

export default app;
