const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const User = require("../models/User");

//auth
exports.auth = async (req, res, next) => {
	try {
		// Extracting JWT from the request object
		const token =
			req.cookies.token ||
			req.body.token ||
			req.header("Authorization").replace("Bearer ", "");
		
		if (!token) {
			return res.status(401).json({ 
                success: false, 
                message: `JWT token is missing`,
            });
		}

		try {
			// Verifying the JWT using the secret key stored in environment variables
			const decode = await jwt.verify(token, process.env.JWT_SECRET);
			// Storing the decoded JWT payload in the request object for further use
			req.user = decode;
		} catch (error) {
			return res.status(401).json({ 
                success: false, 
                message: "Token is invalid", 
            });
		}

		// If JWT is valid, move on to the next middleware or request handler
		next();
	} catch (error) {
		return res.status(401).json({
			success: false,
			message: `Something Went Wrong While Validating the Token`,
		});
	}
};

//Standard customer
exports.isCustomer = async (req, res, next) => {
	try {
		const userDetails = await User.findOne({ email: req.user.email });

		if (userDetails.accountType !== "Customer") {
			return res.status(401).json({
				success: false,
				message: "This is a Protected Route for Customers Only",
			});
		}
		next();
	} catch (error) {
		return res.status(500).json({ 
            success: false, 
            message: `User Role Can't be Verified` 
        });
	}
};

//Adminstrator
exports.isAdmin = async (req, res, next) => {
    try{
        if(req.user.accountType !== "Admin") {
            return res.status(401).json({
                success:false,
                message:'This is a protected route for Admin only',
            });
        }
        next();
    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:'User role cannot be verified, please try again'
        })
    }
}
