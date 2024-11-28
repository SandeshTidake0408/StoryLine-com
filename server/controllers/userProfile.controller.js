import User from "../models/user.model.js";

const userProfile = async (req, res) => {
	try {
		const user = await User.findById(req.user.id);
		console.log(user);
		if (!user) {
			return res.status(400).json({ message: "User not found." });
		}
		res.json({
			username: user.username,
			email: user.email,
		});
	} catch (error) {
		res.status(500).json({
			message: "Failed to fetch profile data",
			error: err.message,
		});
	}
};

export default userProfile;
