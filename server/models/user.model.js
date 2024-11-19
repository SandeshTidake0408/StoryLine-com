import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			minlength: [3, "Username must be at least 3 characters"],
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
		},
		password: {
			type: String,
			required: [true, "Password is Required"],
		},
	},
	{ timestamps: true }
);

userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();

	try {
		this.password = await bcrypt.hash(this.password, 10); // Hash the password
		next();
	} catch (error) {
		next(error);
	}
});

const User = mongoose.model("User", userSchema);
export default User;
