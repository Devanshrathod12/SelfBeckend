import user from '../models/connection.js';
import validator from 'validator';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Check if the user already exists
        const exists = await user.findOne({ email });

        if (exists) {
            return res.json({
                success: false,
                message: 'User already exists'
            });
        }

        // Validate email format and password strength
        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: 'Please enter a valid email'
            });
        }

        if (password.length < 4) {
            return res.json({
                success: false,
                message: 'Please enter a stronger password'
            });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new user({
            name: name,
            email: email,
            password: hashpassword
        });

        // Save the new user to the database
        const savedUser = await newUser.save();

        // Generate a token for the user
        const token = createToken(savedUser._id);

        // Send response with token
        res.json({
            success: true,
            token
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: 'Error'
        });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find the user by email
        const users = await user.findOne({ email });

        // Check if the user exists
        if (!users) {
            return res.json({
                success: false,
                message: 'User not found'
            });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, users.password);

        if (!isMatch) {
            return res.json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        // Generate a token for the user
        const token = createToken(users._id);

        // Send response with token
        res.json({
            success: true,
            token
        });

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: 'Error'
        });
    }
};



const createToken = (id) => {
    const secretKey = 'yourSuperSecretKey123'; 
    return jwt.sign({ id }, secretKey, { expiresIn: '1h' });
};



export default {registerUser, loginUser}