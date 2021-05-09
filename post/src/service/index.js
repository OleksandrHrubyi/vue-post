import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export const createPost = function(title, body) {
  Vue.axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      data: {
        title,
        body,
      },
    })
    .then((response) => response.json)
    .catch((error) => {
      console.log(error);
    });
};

export const removePost = function(id) {
  Vue.axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
    .then((response) => response.json)
    .catch((error) => {
      console.log(error);
    });
};

export const getUsersInfo = function(id) {
  Vue.axios
    .get(`https://jsonplaceholder.typicode.com/comments?userId=${id}`)
    .then((response) => {
      console.log(response.json);
    })
    .catch((error) => {
      console.log(error);
    });
};
