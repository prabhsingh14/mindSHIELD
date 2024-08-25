const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		accountType: {
			type: String,
			enum: ["Admin", "Customer"],
			required: true,
		},
		token: {
			type: String,
		},
		resetPasswordExpires: {
			type: Date,
		},

		// generalise for family - police/ambulance ka baad m dekhege
		emergencyContacts: [
			{
				name: {
					type: String,
					required: true,
				},

				phone: {
					type: String,
					required: true,
				},
			},
		],
		helmetId: {
			type: String,
			required: true,
			unique: true,
		},
		// Add timestamps for when the document is created and last modified
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
