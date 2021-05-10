<template>
  <div class="adding">
    <form class="adding-form" @submit.prevent="onSubmit">
      <label
        ><span class="title"> Title</span>
        <input
          class="adding-input"
          type="text"
          placeholder="Title of your article"
          v-model="title"
        />
      </label>
      <label
        ><span class="title">Discription</span
        ><textarea
          class="textarea"
          v-model="body"
          placeholder="Type your article here"
      /></label>
      <button class="adding-btn" type="submit">Add</button>
    </form>
    <ul class="adding-list">
      <li class="adding-item" v-for="post of createOnePost" :key="post.id">
        <h2 class="adding-title">{{ post.title }}</h2>
        <p class="adding-description">{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      title: "",
      body: "",
    };
  },
  
  computed: mapGetters(["createOnePost"]),

  methods: {
    ...mapMutations(["newPost"]),
    ...mapActions(["createPost"]),
    onSubmit() {
      this.newPost({
        title: this.title,
        body: this.body,
      });

      if (this.title && this.body) {
        this.createPost(this.title, this.body);
      }

      (this.title = ""), (this.body = "");
    },
  },
};
</script>

<style lang="scss" scoped>
.adding {
  margin-top: 120px;
  padding: 30px;
  background-color: #afcde7;
  @media screen and(max-width: 960px) {
    padding: 10px;
    margin-top: 220px;
  }

  &-input {
    width: 100%;
    margin-bottom: 20px;
    padding: 20px;
    box-sizing: border-box;
    font-size: 18px;
  }

  &-btn {
    padding: 10px 50px;
    margin-bottom: 30px;
    border: 1px solid #fff;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 15px;
    background-color: rgba(48, 57, 65, 0.952);
  }

  &-list {
    list-style: none;
    margin: 0px;
    padding: 0px;
  }

  &-item {
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 10px 30px;
  }

  &-item:not(:last-child) {
    margin-bottom: 20px;
  }

  &-title {
    font-size: 25px;

    margin: 0px 0px 10px;
  }

  &-description {
    font-size: 20px;
    margin: 0px;
  }
}

.title {
  display: block;
  padding: 10px;
  font-size: 23px;
  font-style: italic;
  font-weight: 800;
  color: rgba(48, 57, 65, 0.952);
}

.textarea {
  width: 100%;
  padding: 20px;
  min-height: 400px;
  box-sizing: border-box;
  font-size: 18px;
}
</style>
