import express from "express";
import mongoose from "mongoose";
import ejs from "ejs";
import multer from "multer";
import session from "express-session";
import jwt from "jsonwebtoken";

import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import packageRoute from "./routes/package.route.js";
import ratingRoute from "./routes/rating.route.js";
import bookingRoute from "./routes/booking.route.js";
import tourRoute from "./routes/tour.route.js";

import Tour from "./models/tour.model.js";

import cors from 'cors';
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";

const app = express();
dotenv.config();
console.log(process.env.MONGO_URL)
const __dirname = path.resolve();

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.json());
app.use(cookieParser());


//set view engine
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

//app.use("/", authRoute);

const destination = 
[
  "Howrah-Balur math",
  "Howrah-princep ghat",
  "Alipurduar-jaldapara national park",
  "Kolkata-Victoria memorial",
  "Kolkata-Indian Meusem",
  "Kolkata-Kalighat Mandir",
  "Murshidabad-Hazarduari palace & meuseum",
  "Nadia-ISCON MANDIR",
  "North 24 parganas-Dakhineshwar Mandir",
  "Purba Medinipur-Digha",
  "Alipurduar-buxa tiger reserve",
  "Alipurduar-buxa fort",
  "Bankura-Pancha Ratna Shyam Rai Temple",
  "Bankura-Mukutmanipur Dam",
  "Birbhum-tarapeeth",
  "Birbhum-shantiniketan",
  "Cooch Behar-Cooch Behar Rajbari Palace",
  "Cooch Behar-Madanmohan Temple",
  "Dakshin Dinajpur-Ban Jhakri Falls Park",
  "Dakshin Dinajpur-Bhangarh Fort",
  "Darjeeling-mall road darjeeling",
  "Darjeeling-dail monastery",
  "Hooghly-Hooghly Imambara",
  "Hooghly-shri Hangseshwari temple",
  "Howrah-Howrah Bridge"
]
//index page
app.get("/", (req, res) => {
  res.render("index", { title: "Bhromon" });
});

app.get("/auths", (req, res) => {
  res.render("auth", { title: "Bhromon" });
});

app.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});

app.get("/signup", (req, res) => {
  res.render("signup", { title: "Signup" });
});

app.get("/api/auth/dest",async (req, res) => {
  const destination = await Tour.find({});
  res.render("dest", { destination });
});

app.get("/book-package", async (req, res) => {
  const ptitle= req.query.title;
  const pack = await Tour.findOne({ title: ptitle });
  console.log(pack);

  const ticket= req.cookies.access_token;
  const val= jwt.verify(ticket, process.env.JWT_SECRET);
  console.log(val);
  const user = val.email;
  console.log(user);
  res.render("booking", { pack, user });
});

app.get("/viewdestination", (req, res) => {
  res.render("destination_view");
});

app.get("/show", (req, res) => {
  res.render("showbook", { title: "Bhromon" });
});

app.use("/api/tour", tourRoute);
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/package", packageRoute);
app.use("/api/rating", ratingRoute);
app.use("/api/booking", bookingRoute);

app.use(
  session({
    secret: "my secret key",
    saveUninitialized: true,
    resave: false,
  })
);
app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

// //rest api
// app.use("/", (req, res) => {
//   res.send("Welcome to travel and tourism app");
// });

/*//static files
app.use(express.static(path.join(__dirname, "/client/dist")));*/

/*app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});*/

//port
app.listen(process.env.PORT || 3000, () => {
  console.log("Connected to Backend");
  const PORT = process.env.PORT || 3000;
  console.log(`Server listening on ${PORT}`);
});


