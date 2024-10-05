import express from "express"
import userController from '../controller/usercontroller.js';
const { loginUser, registerUser } = userController;


const UserRoutes = express.Router()


UserRoutes.post("/register", registerUser)
UserRoutes.post("/login", loginUser)

export default UserRoutes