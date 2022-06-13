<template>
  <br /><br /><br />
  <div class="container">
    <MyForm :form="form" @onFormSubmit="onFormSubmit" />
    <Loader v-if="loader" />
    <CategoryList :categories="categories" @onDelete="onDelete" @onEdit="onEdit" />
  </div>
</template>

<script>
import axios from "axios";
import MyForm from "./MyForm.vue";
import CategoryList from "./CategoryList.vue";
import Loader from "./Loader.vue";

export default {
  components: {
    MyForm,
    CategoryList,
    Loader,
  },
  data() {
    return {
      url: "http://127.0.0.1:8000/api/category/list",
      categories: [],
      form: { name: "", isEdit: false },
      loader: false,
    };
  },
  methods: {
    //Get List
    getCategories() {
      this.loader = true;
      axios.get(this.url).then((data) => {
        this.categories = data.data;
        this.loader = false;
      });
    },

    // Delete
    deleteCategory(category_id) {
      this.loader = true;
      axios
        .delete(`${this.url}/${category_id}`)
        .then(() => {
          this.getCategories();
        })
        .catch((e) => {
          alert(e);
        });
    },

    //Create
    createCustomer(data) {
      // console.log(data);
      this.loader = true;

      axios
        .post(this.url, {
          name: data.name,
          // email: data.email
        })
        .then(() => {
          this.getCategories();
        })
        .catch((e) => {
          alert(e);
        });
    },

    // Edit
    editCategory(data) {
      this.loader = true;
      axios
        .put(`${this.url}/${data.category_id}`, {
          name: data.name,
        })
        .then(() => {
          this.getCategories();
        })
        .catch((e) => {
          alert(e);
        });
    },
    onDelete(category_id) {
      console.log("app delete " + category_id);
      this.deleteCategory(category_id);
    },
    onEdit(data) {
      this.form = data;
      this.form.isEdit = true;
      if (this.form.isEdit == true) {
        this.form.name = data.category_name;
      }
    },
    onFormSubmit(data) {
      if (data.isEdit) {
        // call edit customer
        this.editCategory(data);
      } else {
        // call create customer
        this.createCustomer(data);
      }
    },
  },
  created() {
    this.getCategories();
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
