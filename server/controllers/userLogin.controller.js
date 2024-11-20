import User from "../models/user.model.js";

const loginUser = async (req, res) => {
	const { email, password } = req.body;

	try {
		//check if user exists
		const user = await User.findOne({ email });
		if (!user) {
			return res
				.status(404)
				.json({ message: "User not found with these Credentials" });
		}
		//validate the password
		const isMatch = await user.comparePassword(password);
		if (!isMatch) {
			return res
				.status(401)
				.json({ message: "Invalid Password.Enter correct password" });
		}
		const token = user.generateAuthToken();
		res.status(200).json({
			message: "Login Successfuk",
			token,
			user: {
				id: user._id,
				username: user.username,
				email: user.email,
			},
		});
	} catch (error) {
		res.status(500).json({ message: "Server Error", error: error.message });
	}
};

export { loginUser };
