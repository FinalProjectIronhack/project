import axios from "axios";
// import { create } from "../../backend/models/Post";

let SERVER_URL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:5000/api`
    : `https://final-project-ironhack-miami.herokuapp.com/api`;

const createHeader = () => {
  //Sends my token to the backend
  return {
    headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
  };
};

//THIS IS WHERE WE CONNECT TO THE BACKEND >> OUR FRONT END ROUTES
const actions = {
  createQuestion: async ({ name, question }) => {
    return await axios.post(
      `${SERVER_URL}/questions`,
      { name, question },
      createHeader()
      // here we create our we take the name and question values submitted by the user and we post it to our /api/questions. we are passing through here name and question as our props. once this gets to the api, it gets filtered through the schema and routed to the backend database.
    );
  },
  newChatRoom: async ({ from, to }) => {
    return await axios.post(
      `${SERVER_URL}/open-chat`,
      { from, to },
      createHeader()
    );
  },
  getRoom: async ({ roomId }) => {
    return await axios.post(
      `${SERVER_URL}/chat-open`,
      { roomId },
      createHeader()
    );
  },

  getMyContacts: async () => {
    return await axios.get(`${SERVER_URL}/contacts`, createHeader());
  },

  newMessage: async ({ text, roomId }) => {
    return await axios.post(
      `${SERVER_URL}/send-message`,
      { text, roomId },
      createHeader()
    );
  },

  getQuestions: async () => {
    return await axios.get(`${SERVER_URL}/all-questions`, createHeader());
  },
  updateQuestion: async (answer) => {
    return await axios.post(
      `${SERVER_URL}/update-question`,
      answer,
      createHeader()
      // here we attach our answer to the corresponding question. we do this by submitting the answer and then we use the findByIdAndUpdate function to update the question to have the answer. we post that answer to the database.
    );
  },
  getPlayers: async (player) => {
    return await axios.post(
      `${SERVER_URL}/all-players`,
      player,
      createHeader()
      //when we call getPlayers in a function, we are posting player(however it is defined or set) to all-players/ players is a single argument
    );
  },

  getMessages: async (clickedOn) => {
    return await axios.get(
      `${SERVER_URL}/Messenger`,
      clickedOn,
      createHeader()
    );
  },

  getProfile: async () => {
    return await axios.get(`${SERVER_URL}/my-profile`, createHeader());
  },
  createUserDetails: async ({ bio, sports, gender, zip, level }) => {
    return await axios.post(
      `${SERVER_URL}/my-profile`,
      { bio, sports, gender, zip, level },
      createHeader()
    );
  },
  // we want to grab the data submitted, send it to back end. then we want to go to the profile, get the submitted details from the back end, and post them to the details portion of the page.
  getMyPosts: async () => {
    return await axios.get(`${SERVER_URL}/my-posts`, createHeader());
  },
  getAllPosts: async () => {
    return await axios.get(`${SERVER_URL}/all-posts`, createHeader());
  },
  createNewPost: async ({ title, post }) => {
    return await axios.post(
      `${SERVER_URL}/new-post`,
      { title, post },
      createHeader()
    );
  },
  authenticate: async (user) => {
    let res = await axios.post(`${SERVER_URL}/authenticate`, user);
    localStorage.setItem("token", res.data.token);
  },
  getUser: async () => {
    return await axios.get(`${SERVER_URL}/get-user`, createHeader());
  },
};

export default actions;
