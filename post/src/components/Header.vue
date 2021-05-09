<template>
  <div class="header">
    <h1 class="header-title" v-if="this.$route.path === '/'">
      Popular articles
    </h1>
    <h2 class="header-title" v-if="this.$route.path === '/add'">
      Add your article
    </h2>
    <h2 class="header-title" v-if="this.$route.path === '/users'">
      All users information
    </h2>
    <nav>
      <ul class="header-list">
        <li class="header-item">
          <router-link class="header-link" to="/" exact>Home</router-link>
        </li>
        <li class="header-item">
          <router-link class="header-link" to="/users" exact
            >All users</router-link
          >
        </li>
        <li class="header-item">
          <router-link class="header-link" to="/add" exact
            >Add post</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
.header {
  position: fixed;
  top: 10px;
  right: 0px;
  left: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 40px 120px;
  border-radius: 5px;
  font-style: italic;
  font-size: 20px;
  background-color: rgba(51, 65, 78, 0.952);
  @media screen and(max-width: 960px) {
    padding: 10px 30px;
    font-size: 14px;
  }

  &-title {
    font-size: 42px;
    color: #fff;
    padding: 0px;
    margin: 0px;
    @media screen and(max-width: 960px) {
      font-size: 30px;
    }
    @media screen and(max-width: 850px) {
      font-size: 18px;
    }
  }

  &-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0px;
    padding: 0px;
  }

  &-item {
    background-color: rgba(75, 89, 100, 0.952);
    border: 1px solid #fff;
    color: #fff;
    border-radius: 8px;
    transition: 0.25s;
    margin-right: 40px;
    @media screen and(max-width: 960px) {
      margin: 10px;
      width: 100%;
    }

    &:hover {
      cursor: pointer;
      background-color: rgba(34, 60, 80, 0.329);
    }
  }

  &-item:last-child {
    @media screen and(min-width: 961px) {
      margin: 0px;
    }
  }

  &-link {
    display: block;
    padding: 10px 30px;
    color: #fff;
  }
}
</style>
