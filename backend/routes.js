const express = require("express");
const router = express.Router();
const Post = require("./models/Post");
const User = require("./models/User");
const FAQ = require("./models/FreqQuestions");
const Question = require("./models/Question");
const jwt = require("jsonwebtoken");

//http://localhost:5000/api/all-posts GET
router.get("/all-posts", async (req, res) => {
  let allPosts = await Post.find().populate("userId");
  res.json(allPosts);
});

//http://localhost:5000/api/questions POST To manage questions
router.post("/questions", async (req, res) => {
  let question = await Question.create(req.body);
  res.json(question);
  // here we create our new question and the result us added to res.json.
});

//http://localhost:5000/api/show-questions GET
router.get("/all-questions", authorize, async (req, res) => {
  console.log(res.locals.user);
  let allQuestions = null;
  if (res.locals.user.admin) {
    allQuestions = await Question.find().populate("userId");
  } else {
    allQuestions = await Question.find({ show: true });
  }
  console.log(allQuestions);
  res.json(allQuestions);
});

router.get("/my-posts", authorize, async (req, res) => {
  let allPosts = await Post.find({ userId: res.locals.user._id });
  console.log(res.locals.user);
  res.json(allPosts);
  // we need posts, userId, then we need to match the userId with our current user and only show the current users post. no filters
  //were gonna grab so we need to still use await(because we already used async) Post.find(current user) were going to populate(posts and name)
});

router.get("/my-profile", authorize, async (req, res) => {
  let profile = await User.findById({ _id: res.locals.user._id });

  res.json(profile);
  // we need posts, userId, then we need to match the userId with our current user and only show the current users post. no filters
  //were gonna grab so we need to still use await(because we already used async) Post.find(current user) were going to populate(posts and name)
});
router.post("/my-profile", authorize, async (req, res) => {
  let update = req.body;
  let updateProfile = await User.findOneAndUpdate(
    { _id: res.locals.user._id },
    update,
    { new: true }
  );
  // res.json(profile);
  res.json(updateProfile);
});

//http://localhost:5000/api/new-post POST
router.post("/new-post", authorize, async (req, res) => {
  //Everyime you put authorize as middleware you'll have the user as res.locals.user
  let newPost = req.body;
  newPost.userId = res.locals.user._id; //How we add the userId to the post document
  let post = await Post.create(newPost);
  res.json(post);
});

router.get("/get-user", authorize, async (req, res) => {
  let user = await User.findById(res.locals.user._id);
  res.json(user);
});
router.post("/all-players", authorize, async (req, res) => {
  let allPlayers = await User.find(req.body);
  // req.body= inputs of user to back end ==> they req a body of information, we compare it to the results the computer finds

  //here we are asking the computer to find whatever was inputted by the user(req.body) we place all that was found in all players. bewlow req.body is only representing what was inputted(the zipcode) and allPlayers.length represents how many players the computer found matching those parameters.
  console.log(req.body, allPlayers.length);
  res.json(allPlayers);
});
router.post("/authenticate", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    //if the user is not in database create them
    user = await User.create(req.body);
  }
  jwt.sign({ user }, "secret key", { expiresIn: "120min" }, (err, token) => {
    res.json({ user, token });
  });
});

//Middleware >>> Put this in the middle of any route where you want to authorize
function authorize(req, res, next) {
  let token = req?.headers?.authorization?.split(" ")[1]; //Token from front end
  if (token) {
    jwt.verify(token, "secret key", (err, data) => {
      if (!err) {
        res.locals.user = data.user; //Set global variable with user data in the backend
        next();
        // data.user set to res.local.use which is used above in my-post
      } else {
        console.log(`you're not logged in!!!`);
        res.locals.user = {};
        next();

        // res.status(403).json({ message: err });
        //throw new Error({ message: "ahhh" })
      }
    });
  } else {
    console.log(`you're not logged in`);
    next();
    // res.status(403).json({ message: "Must be logged in!" });
  }
}

var nodemailer = require("nodemailer");
const { Router } = require("express");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mikimikenazboi@gmail.com",
    pass: "Andrew0414!",
  },
});

router.post("/send-email", authorize, async (req, res) => {
  var mailOptions = {
    from: req.body.from,
    to: req.body.to,
    subject: "New Message from Play Sports",
    text: req.body.text,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

// mikimikenazboi@gmail.com

module.exports = router;
