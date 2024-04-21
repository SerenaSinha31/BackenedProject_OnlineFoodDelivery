
import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/helper.js";
import JWT from 'jsonwebtoken';

export const registerController=async(req,res)=>{
    try{
        const{name,email,password,phone,address}=req.body
        //validations
        if(!name){
            return res.send({message:'Name is Required'})
        }
        if(!email){
            return res.send({message:'Email is Required'})
        }
        if(!password){
            return res.send({message:'Password is Required'})
        }
        if(!phone){
            return res.send({message:'PhoneNumber is Required'})
        }
        if(!address){
            return res.send({message:'Address is Required'})
        }
        //existing user
        const existinguser = await userModel.findOne({email})
        if(existinguser){
            return res.status(200).send({
                success:false,
                message:'User Already Exists'
            })
        }
        //register user
        const hashedPassword = await hashPassword(password)
        //saved
        const user = await new userModel({name,email,phone,address,password:hashedPassword}).save()
        res.status(201).send({
            success:true,
            message:'User Registered Successfully',
            user,

        })


    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Registeration',
            error

        })
    }
};
//post login
export const loginController=async(req,res)=>{
    try{
        const{email,password} = req.body
        if(!email || !password){
          return res.status(404).send({
            success:false,
            message:'Invalid email or password'
          });
        }
        //check user
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Email is not registered'
            });
        }
        const match = await comparePassword(password,user.password);
        if(!match){
            return res.status(200).send({
                success:false,
                message:'Invalid Password'

        });
    }
    //token create
    const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{
        expiresIn: "15d",
    });
    res.status(200).send({
        success:true,
        message:'login successfully',
        user:{
            name:user.name,
            email:user.email,
            phone:user.phone,
            address:user.address,

           
        },
        token,
    });
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in login',
            error,
        });

    }
};
//test controller export
export const testController = (req,res) => {
    res.send('protected Route');
};


