<template>
  <div class="table-container">
    <table class="table">
      <thead>
        <tr>
          <th>№</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Website</th>
          <th>Information</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in getAllUsers" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.website }}</td>
          <td>
            <button
              class="table-btn"
              v-on:click="onClick"
              v-bind:id="[item.id]"
            >
              Info
            </button>
            <div
              class="modal"
              v-if="Number(item.id) === Number(number) && modal"
            >
              <h3>Company: {{ item.company.name }}</h3>
              <p>Catchphrase: {{ item.company.catchPhrase }}</p>
              <button
                v-on:click="onClick"
                class="modal-btn-close"
                type="button"
              >
                X
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      modal: false,
      number: 1,
    };
  },

  computed: mapGetters(["getAllUsers"]),

  methods: {
    ...mapActions(["getUsers"]),
    onClick(e) {
      this.modal = !this.modal;
      this.number = e.target.id;
    },
  },

  mounted() {
    this.getUsers();
  },
};
</script>

<style lang="scss" scoped>
.table-container {
  margin-top: 120px;
  padding: 10px;
  background-color: rgba(48, 57, 65, 0.411);
  @media screen and(max-width: 1080px) {
    margin-top: 210px;
    padding: 2px;
  }
  @media screen and(max-width: 703px) {
    margin-top: 250px;
  }
}

.table {
  width: 100%;
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  font-size: 18px;
  border-collapse: collapse;
  text-align: center;
  @media screen and(max-width: 1080px) {
    font-size: 12px;
  }

  @media screen and(max-width: 850px) {
    font-size: 10px;
  }

  @media screen and(max-width: 450px) {
    font-size: 6px;
  }

  &-btn {
    padding: 5px 15px;
    border: 1px solid #fff;
    border-radius: 5px;
    outline: none;
    background-color: #afcde7;
    font-size: 15px;
    cursor: pointer;
    transition: 0.25s;
    @media screen and(max-width: 850px) {
      padding: 2px 5px;
      font-size: 6px;
    }

    &:hover {
      background-color: #7fb7e9;
    }
  }
}

th,
td:first-child {
  background: #afcde7;
  color: rgb(51, 49, 49);
  padding: 20px 30px;
  @media screen and(max-width: 850px) {
    padding: 2px;
  }
  @media screen and(max-width:550px) {
    display: none;
  }
}

th,
td {
  border: 1px solid #fff;
  padding: 10px 20px;
  @media screen and(max-width: 850px) {
    padding: 2px;
  }
}

td {
  background: #d8e6f3;
}

th:first-child,
td:first-child {
  text-align: left;
}

.modal {
  position: absolute;

  right: 150px;
  padding: 30px;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: #afcde7;
  @media screen and(max-width: 620px) {
    top: 50%;
    right: 25%;
    margin: 0 auto;
    width: 40%;
  }

  &-btn-close {
    position: absolute;
    top: -7px;
    left: -7px;
    padding: 8px 9px;
    outline: none;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.25s;
    &:hover {
      background-color: rgb(238, 92, 92);
    }
  }
}
</style>
