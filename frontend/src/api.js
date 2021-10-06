import axios from "axios";

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
      // here we create our
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
      // here we create our
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
  getProfile: async () => {
    return await axios.get(`${SERVER_URL}/my-profile`, createHeader());
  },
  createUserDetails: async ({ bio, sports, gender, zip }) => {
    return await axios.post(
      `${SERVER_URL}/my-profile`,
      { bio, sports, gender, zip },
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
