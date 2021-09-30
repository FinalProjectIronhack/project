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
  console.log(allPosts);
  res.json(allPosts);
});

//http://localhost:5000/api/questions POST To manage questions
router.post("/questions", async (req, res) => {
  let question = await Question.create(req.body);
  let allQuestions = await Question.find();

  res.json(allQuestions);
});

router.get("/my-posts", authorize, async (req, res) => {
  let allPosts = await Post.find({ userId: res.locals.user._id }).populate(
    "userId"
  );
  console.log(res.locals.user);
  res.json(allPosts);
  // we need posts, userId, then we need to match the userId with our current user and only show the current users post. no filters
  //were gonna grab so we need to still use await(because we already used async) Post.find(current user) were going to populate(posts and name)
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
        res.status(403).json({ message: err });
        //throw new Error({ message: "ahhh" })
      }
    });
  } else {
    res.status(403).json({ message: "Must be logged in!" });
  }
}

module.exports = router;
