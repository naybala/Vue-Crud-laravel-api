<template>
  <br /><br /><br />
  <div class="container">
    <Loader v-if="loader" />
    <PizzaList :products="pizzas" @onDelete="onDelete" @onEdit="onEdit" />
  </div>
</template>

<script>
import axios from "axios";
import PizzaList from "./PizzaList.vue";
import Loader from "./Loader.vue";

export default {
  components: {
    PizzaList,
    Loader,
  },
  data() {
    return {
      url: "http://127.0.0.1:8000/api/pizza/list",
      pizzas: [],
      //   form: { name: "", isEdit: false },
      loader: false,
    };
  },
  methods: {
    //Get List
    getProductList() {
      this.loader = true;
      axios.get(this.url).then((data) => {
        this.pizzas = data.data;
        this.loader = false;
      });
    },
  },
  created() {
    this.getProductList();
  },
};
</script>

<style>
.vue-color {
  background: #244ec2 !important;
}

.main.container {
  margin-top: 60px;
}

.submit-button {
  margin-top: 24px !important;
  float: right;
}

.data {
  margin-top: 15px;
}

thead tr th {
  background: #e0e0e0 !important;
}

.ui.inverted.dimmer {
  background-color: rgba(255, 255, 255, 0) !important;
}
</style>
