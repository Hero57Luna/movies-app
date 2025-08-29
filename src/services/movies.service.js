import axios from "axios";

export const getMovies = (title, callback) => {
    axios.get(`https://www.omdbapi.com/?t=${title}&apikey=c9f98466`).then((res) => {
        callback(res.data);
    }).catch((err) => {
        console.log(err);
    });
}