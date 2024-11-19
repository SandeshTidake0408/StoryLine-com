import User from "../models/user.model.js";

const registerUser = async (req, res) => {
	const { username, email, password } = req.body;

	try {
		const existedUser = await User.findOne({ email });

		if (existedUser) {
			return res.status(400).json({ message: "User already exists" });
		}

		const newUser = await User.create({
			username,
			email,
			password,
		});

		res.status(201).json({
			message: "Registration successful! You can now log in.",
		});
	} catch (error) {
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export { registerUser };
