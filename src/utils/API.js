import axios from "axios";

export default axios.create({
    baseURL: "https://lwalbeck.pythonanywhere.com/",
    responseType: "json"
});