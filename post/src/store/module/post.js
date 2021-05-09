import Vue from "vue";

export default {
  actions: {
    async getAll(cnt, limit) {
      await Vue.axios
        .get("https://jsonplaceholder.typicode.com/posts?_limit=" + limit)
        .then((response) => {
          cnt.commit("updatePosts", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getInfo(cnt, id) {
      await Vue.axios
        .get(`https://jsonplaceholder.typicode.com/comments?userId=${id}`)
        .then((response) => {
          cnt.commit("infoPost", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getPost(cnt, id) {
      await Vue.axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
          cnt.commit("onePost", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getUsers(cnt) {
      await Vue.axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => {
          cnt.commit("allUsers", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    addPost(state, value) {
      state.posts.unshift(value);
    },

    newPost(state, post) {
      state.newPost.unshift(post);
    },

    infoPost(state, info) {
      state.userInfo = info;
    },

    onePost(state, info) {
      state.onePost = info;
    },

    allUsers(state, users) {
      state.allUsers = users;
    },
  },
  state: {
    posts: [],
    users: [],
    newPost: [],
    userInfo: [],
    allUsers: [],
    onePost: {},
  },
  getters: {
    validPost(state) {
      return state.posts.filter((el) => {
        return el.title && el.body;
      });
    },

    createOnePost(state) {
      return state.newPost.filter((el) => {
        return el.title && el.body;
      });
    },

    getPost(state) {
      return state.posts;
    },

    getUserInfo(state) {
      return state.userInfo;
    },

    getComments(state) {
      return state.userInfo;
    },
    getOnePost(state) {
      return state.onePost;
    },
    getAllUsers(state) {
      return state.allUsers;
    },
  },
};
