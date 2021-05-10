<template>
  <div class="postinfo" id="postsInfo">
    <h2 class="postinfo-title">{{ getOnePost.title }}</h2>
    <p class="postinfo-title">{{ getOnePost.body }}</p>
    <button class="postinfo-btn" v-on:click="onClick">Show comments</button>
    <ul class="postinfo-list" v-if="this.comments">
      <li class="postinfo-item" v-for="post in getComments" :key="post.id">
        <h3 class="postinfo-title">{{ post.name }}</h3>
        <p class="postinfo-title">{{ post.body }}</p>
        <a :href="`mailto:${post.email}`">{{ post.email }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      comments: false,
    };
  },

  computed: mapGetters(["getComments", "getOnePost"]),

  methods: {
    ...mapActions(["getInfo", "getPost"]),

    onClick() {
      this.comments = !this.comments;
    },
  },

  mounted() {
    this.getInfo(this.$route.params.id);
    this.getPost(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
.postinfo {
  margin-top: 120px;
  padding: 30px;
  background-color: #afcde7;
  @media screen and(max-width: 960px) {
    margin-top: 220px;
  }

  &-title {
    margin: 0px 0px 20px 0px;
    padding: 0px;
  }

  &-list {
    list-style: none;
    margin: 0px;
    padding: 0px;
  }

  &-item {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #fff;
    border-radius: 5px;
  }

  &-btn {
    padding: 8px 20px;
    margin-bottom: 10px;
    border: 1px solid #fff;
    border-radius: 5px;
    outline: none;
    background: rgba(48, 57, 65, 0.952);
    color: #fff;
    cursor: pointer;
  }
}
</style>
