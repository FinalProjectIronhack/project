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
    );
  },
  getQuestions: async () => {
    return await axios.get(`${SERVER_URL}/all-questions`, createHeader());
  },
  getProfile: async () => {
    return await axios.get(`${SERVER_URL}/my-profile`, createHeader());
  },
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
