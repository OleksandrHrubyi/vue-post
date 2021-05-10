<template>
  <div class="main">
    <ul class="main-list">
      <li class="main-item" v-for="post in validPost" :key="post.id">
        <router-link class="main-link" :to="`${post.id}`"
          ><h2 class="main-title">{{ post.title }}</h2></router-link
        >
      </li>
    </ul>
    <button v-if="button" class="main-btn" v-on:click="onLoad" type="button">
      Load more
    </button>
    <div class="observ"><inter-observer @intersect="onLoad" /></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import InterObserver from "./Observer.vue";

export default {
  data() {
    return {
      page:
        this.$store.state.post.page === null ? 1 : this.$store.state.post.page,
      button: true,
      observer: null,
    };
  },

  components: { InterObserver },

  computed: mapGetters(["validPost"]),

  methods: {
    ...mapActions(["getAll"]),

    onLoad() {
      if (this.page >= 10) {
        this.button = false;
        return;
      }

      this.getAll((this.page += 1));
      this.$store.state.post.page = this.page;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  margin-top: 120px;
  padding: 30px;
  background-color: #afcde7;
  @media screen and(max-width: 960px) {
    padding: 10px;
    margin-top: 220px;
  }

  &-list {
    list-style: none;
    padding: 0px;
    margin: 0px 0px 50px 0px;
  }

  &-item {
    border-bottom: 1px solid #fff;
    padding: 10px;
  }

  &-item:not(:last-child) {
    margin-bottom: 30px;
  }

  &-link {
    color: rgb(24, 28, 32);
  }

  &-title {
    margin: 0px;
    padding: 0px;
    @media screen and(max-width: 960px) {
      font-size: 15px;
    }
  }

  &-btn {
    padding: 15px 30px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    outline: none;
    background: rgba(48, 57, 65, 0.952);
    color: #fff;
    @media screen and(max-width: 480px) {
      display: none;
    }

    &:hover {
      transition: 0.2s;
      background: rgba(105, 124, 139, 0.952);
    }
  }

  .observ {
    @media screen and(min-width: 480px) {
      display: none;
    }
  }
}
</style>
