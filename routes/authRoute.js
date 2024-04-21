import express from 'express'
import {
    registerController,
    loginController,
    testController,
} from '../controllers/authController.js'
import{isAdmin,requireSignIn} from "../middlewares/authMiddleware.js";

//router object
const router = express.Router()

//routing
//Register || method POST
router.post('/register', registerController)

//test routes
router.get('/test',requireSignIn,isAdmin,testController);


//LOGIN || POST
router.post('/login',loginController)

export default router