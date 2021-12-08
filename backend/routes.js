const express = require("express");
const router = express.Router();
const Post = require("./models/Post");
const User = require("./models/User");
const FAQ = require("./models/FreqQuestions");
const Question = require("./models/Question");
const jwt = require("jsonwebtoken");
const Room = require("./models/Room");
const Message = require("./models/Message");

//http://localhost:5000/api/all-posts GET
router.get("/all-posts", async (req, res) => {
  let allPosts = await Post.find().populate("userId");
  res.json(allPosts);
});
// here we are routing from the back end the following parameters and then storing it into allPosts. we tell the computer that whatever it recieves, we want it to go to /all-posts. we then tell the computer we want it to find()(meaning find all) in the Post collection and populate any data with a 'userId' we then take the resulting information and make it a JSON. (completes the API process.)
//http://localhost:5000/api/questions POST To manage questions
router.post("/questions", async (req, res) => {
  let question = await Question.create(req.body);
  res.json(question);
  // here we take the users input(req.body) and we create our new question by filtering what is posted to our questions api through our schema and we route it to the back end.
});

//http://localhost:5000/api/questions POST To answer question
router.post("/update-question", authorize, async (req, res) => {
  let question = await Question.findByIdAndUpdate(
    req.body.id,
    {
      answer: req.body.answer,
      show: req.body.showQ,
    },
    { new: true }
  );
  res.json(question);
});
// here we take take whatever is posted to the update-question api, we find the question with the corresponding ID, and we update that Question to contain the answer inputted by the user(admin)

//http://localhost:5000/api/show-questions GET
router.get("/all-questions", authorize, async (req, res) => {
  console.log(res.locals.user);
  let allQuestions = null;
  // all questions start with the value null, if the question is admin verifies the question, it will populate the userID
  if (res.locals.user.admin) {
    allQuestions = await Question.find().populate("userId");
  } else {
    allQuestions = await Question.find({ show: true });
    // if the question has been given a value of true to show, that value can also be shown.
  }
  console.log(allQuestions);
  res.json(allQuestions);
});

router.get("/Messenger", authorize, async (req, res) => {
  let messages = await Messages.find();
  console.log(messages);
  //
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
    // we have our google login. we the user logs in, we get googles response. in googles response we have our profileObj. we take the profile object and we plug i our authenticate action. the authentication action takes the profileObj and posts it to our authenticate api. when it is recieved into the api, our router takes that information, and using our User collection/schema, checks and sees if the email of the said user exists already. if the user does not exist, we create a new user with the profileObj(req.body)
    user = await User.create(req.body);
  }

  jwt.sign({ user }, "secret key", { expiresIn: "120min" }, (err, token) => {
    res.json({ user, token });
    // we then use JWT to assign the user a secret encrypted key that allows the user and its token to be logged in. after 120 min this secret key expires and the user is logged out
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
const { model } = require("mongoose");

//playsports.netlify.app@gmail.com
//PlaySports2021!

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "playsports.netlify.app@gmail.com",
    pass: "PlaySports2021!",
  },
});

router.get("/contacts", authorize, async (req, res) => {
  let contacts = await Room.find().populate("userId");
  let myContacts = await contacts.filter((room) => {
    if (
      room.usersEmail[0] === res.locals.user.email ||
      room.usersEmail[1] === res.locals.user.email
    ) {
      return room;
    }
  });

  console.log(myContacts);
  res.json(myContacts);
});

router.post("/chat-open", authorize, async (req, res) => {
  console.log(req.body, "chat open");
  let messages = await Message.find({ roomId: req.body.roomId }).populate(
    "userId"
  );
  console.log(messages);
  res.json(messages);
});
router.post("/open-chat", authorize, async (req, res) => {
  let room = await Room.findOne({
    usersEmail: [req.body.to, req.body.from],
  });

  if (!room) {
    room = await Room.findOne({
      usersEmail: [req.body.from, req.body.to],
    });
  }
  if (!room) {
    room = await Room.create({ usersEmail: [req.body.to, req.body.from] });
  }
  res.json(room);
});
router.post("/send-message", authorize, async (req, res) => {
  // let room = await Room.create({ usersEmail: [req.body.to, req.body.from] });

  let message = await Message.create({
    text: req.body.text,
    userId: res.locals.user._id,
    roomId: req.body.roomId,
  });

  let room = await Room.findById(req.body.roomId);
  console.log(req.body);

  let toEmail = room.usersEmail.filter(
    (email) => email !== res.locals.user.email
  );

  console.log(toEmail);

  var mailOptions = {
    to: toEmail,
    subject: "New Message from Play Sports",
    html: `<h2>${req.body.text}</h2><a href='https://playsports.netlify.app/room/${req.body.roomId}'>Respond</a>`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.json(message);
});

// mikimikenazboi@gmail.com

module.exports = router;
