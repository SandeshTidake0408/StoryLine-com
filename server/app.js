import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true })); //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/", (req, res) => {
	const { title, author, content } = req.body;
	console.log(title, author, content);
	res.send("Interactive Storytelling Platform Backend Running");
	console.log();
});

import userRoutes from "./routes/user.routes.js";

app.use("/api/v1/user", userRoutes);
export default app;
