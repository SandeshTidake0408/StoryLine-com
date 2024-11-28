import jwt, { decode } from "jsonwebtoken";

const verifyToken = (req, res, next) => {
	const token = req.header("Authorization")?.replace("Bearer ", "");
	// console.log(token);
	if (!token) {
		return res
			.status(401)
			.json({ message: "Access Denied. No token provided." });
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		// console.log(decoded);
		req.user = decoded;
		next();
	} catch (error) {
		res.status(400).json({ message: "Invalid or expired Token." });
	}
};

export default verifyToken;
