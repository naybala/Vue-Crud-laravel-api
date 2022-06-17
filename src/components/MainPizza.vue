<template>
  <br /><br /><br />
  <div class="container">
    <MyFormPizza :form="form" @onFormSubmit="onFormSubmit" />
    <Loader v-if="loader" />
    <PizzaList :products="pizzas" @onDelete="onDelete" @onEdit="onEdit" />
  </div>
</template>

<script>
import axios from "axios";
import PizzaList from "./PizzaList.vue";
import Loader from "./Loader.vue";
import MyFormPizza from "./MyFormPizza.vue";

export default {
  components: {
    PizzaList,
    Loader,
    MyFormPizza,
  },
  data() {
    return {
      url: "http://127.0.0.1:8000/api/pizza/list",
      pizzas: [],
      form: {
        name: "",
        // price: "",
        // publishStatus: "",
        // category: "",
        // discount: "",
        // buyOneGetOne: "",
        // waitingTime: "",
        // description: "",
        isEdit: false,
      },
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
    // Delete
    deleteProdcut(pizza_id) {
      this.loader = true;
      axios
        .delete(`${this.url}/${pizza_id}`)
        .then(() => {
          this.getProductList();
        })
        .catch((e) => {
          alert(e);
        });
    },
    // Edit
    editPizza(data) {
      this.loader = true;
      axios
        .put(`${this.url}/${data.pizza_id}`, {
          name: data.piza_name,
          price: data.price,
          publishStatus: data.publish_status,
          category: data.category_id,
          discount: data.discount_price,
          buyOneGetOne: data.buy_one_get_one_status,
          waitingTime: data.waiting_time,
          description: data.description,
        })
        .then(() => {
          this.getProductList();
        })
        .catch((e) => {
          alert(e);
        });
    },
    onDelete(pizza_id) {
      // console.log("app delete " + pizza_id);
      this.deleteCategory(pizza_id);
    },
    onEdit(data) {
      this.form = data;
      this.form.isEdit = true;
      if (this.form.isEdit == true) {
        this.form.name = data.pizza_name;
        this.form.price = data.price;
        this.publishStatus = data.publish_status;
        this.category = data.category_id;
        this.discount = data.discount_price;
        this.buyOneGetOne = data.buy_one_get_one_status;
        this.waitingTime = data.waiting_time;
        this.description = data.description;
      }
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
