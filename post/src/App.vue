<template>
  <div class="app" id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import { mapActions } from "vuex";
export default {
  name: "App",

  components: {
    Header,
  },

  methods: {
    ...mapActions(["getAll"]),
  },

  mounted() {
    this.getAll();
  },
};
</script>

<style lang="scss">
.app {
  max-width: 1960px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  height: 100%;
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  box-sizing: border-box;
  @media screen and(max-width: 960px) {
    padding: 2px;
  }
}
</style>
