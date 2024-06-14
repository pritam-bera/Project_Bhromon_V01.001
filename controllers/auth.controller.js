import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

//test controller
export const test = (req, res) => {
  return res.send("Welcome To Bhromon! \nPlan Journey With Us!");
};

//signup controller
export const signupController = async (req, res) => {
  try {
    const { username, email, password, address, phone, user_role } = req.body;

    if (!username || !email || !password || !address || !phone) {
      return res.status(200).send({
        success: false,
        message: "All fields are required!",
      });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(200).send({
        success: false,
        message: "User already exists please login",
      });
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      address,
      phone,
      user_role,
    });

    await newUser.save();
    
    //create JWT
    const token = newUser.createJWT();
    console.log("My JWT is", token);

    res.render("login", { title: "Bhromon" });
    
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error is server!",
    });
  }
};

//login controller
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(200).send({
        success: false,
        message: "All fields are required!",
      });
    }

    const validUser = await User.findOne({ email });
    if (!validUser) {
      return res.status(404).send({
        success: false,
        message: "User not found!",
      });
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return res.status(200).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    //create JWT
    const token = validUser.createJWT();
    console.log("My JWT is", token);


    const { password: pass, ...rest } = validUser._doc; //deselecting password to send user(this will send all data accept password)
    res.cookie("access_token", token, { httpOnly : true, secure : false })
    res.redirect('/api/auth/dest')
  } catch (error) {
    console.log(error);
  }
};

// logout controller 
export const logOutController = (req, res) => {
  try {
    res.clearCookie("access_token");
    res.status(200).send({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
