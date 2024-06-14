import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const requireSignIn = async (req, res, next) => {
  if (req?.cookies?.access_token) {
    const token = await req.cookies.access_token;
    if (!token)
      return res.status(401).send({
        success: false,
        message: "Unautorized: Token not provided!",
      });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err)
        return res.status(403).send({
          success: false,
          message: "Forbidden",
        });

      req.user = user;
      next();
    });
  } else {
    return res.status(401).send({
      success: false,
      message: "Unautorized: Token not provided!",
    });
  }
};

//Admin access
export const isAdmin = async (req, res, next) => {
  //console.log(req.user.id);
  try {
    //const token = req.cookies.access_token;
    const token = req.body.access_token;
    if (!token) {
      req.flash("fail", "you need to login first");
      res.send("Login token not found")
    } else {
      const validate = jwt.verify(token, process.env.JWT_SECRET);
      console.log(validate);
      //next();
      const email = validate.email;
      const user = await User.findOne({ email });
      if (user.user_role === 1) {
        next();
      } else {
        return res.status(401).send({
          success: false,
          message: "Unautorized Access",
        });
      }
    }

  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Error in admin middleware",
      error,
    });
  }
};