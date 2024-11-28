import User from "../models/user.model.js";

const updateProfile = async (req, res) => {
	const { password, newPassword } = req.body;
	try {
		// Find the user by their ID (from token)
		const user = await User.findById(req.user.id);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		// Check if current password matches the hashed password
		const isMatch = await user.comparePassword(password);
		if (!isMatch) {
			return res
				.status(400)
				.json({ message: "Incorrect current password" });
		}

		// Hash the new password and update the user
		if (newPassword) {
			const user = await User.findById(req.user.id);

			// Update the user's password field
			user.password = newPassword; // Mongoose will hash this password automatically using the pre-save middleware

			// Save the updated user
			await user.save();
		}

		res.json({ message: "Profile updated successfully" });
	} catch (err) {
		res.status(500).json({
			message: "Failed to update profile",
			error: err.message,
		});
	}
};

export default updateProfile;
