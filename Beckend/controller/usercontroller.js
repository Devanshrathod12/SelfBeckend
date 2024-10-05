import user from '../models/connection.js';
import validator from 'validator';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const exists = await user.findOne({ email });

        if (exists) {
            return res.json({
                success: false,
                message: 'User already exists'
            });
        }
        const newUser = new user({
            name: name,
            email: email,
            password: password 
        });
        await newUser.save();

        res.json({
            success: true,
            message: 'User registered successfully'
        });
    } 
    catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: 'Error occurred'
        });
    }
};
const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await userModel.findOne({email});

        if(!user){
            return res.json({
                success: false,
                message: 'User not found'
            })
        }
        
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({
                success: false,
                message: 'Invalid credentials'
            })
        }
        
        const token = createToken(user._id);
        res.json({
            success: true,
            token
        })


    } catch (error) {
        console.log(error);
        res.json({
            message: false,
            message: 'Error'
        })
    }
} 

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}


export default {registerUser, loginUser}