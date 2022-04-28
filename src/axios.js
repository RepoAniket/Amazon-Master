import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazon-clone-firebase.herokuapp.com",
  //  'http://localhost:5001/clone-10bb4/us-central1/api',
});

export default instance;
