<template>
    <div class="ui fixed inverted menu vue-color">
      <div class="ui container">
        <a href="#" class="header item">Vue JS CRUD with Laravel API</a>
      </div>
    </div>

    <div class="ui main container">
      <MyForm :form="form" @onFormSubmit="onFormSubmit" />
      <Loader v-if="loader" />
      <CustomerList
        :customers="customers"
        @onDelete="onDelete"
        @onEdit="onEdit"
      />
    </div>
</template>

<script>
import axios from 'axios'
import MyForm from './MyForm.vue'
import CustomerList from "./CustomerList.vue"
import Loader from './Loader.vue'

export default {
  components: {
    MyForm,
    CustomerList,
    Loader
  },
  data() {
    return {
      url: "http://127.0.0.1:8000/api/category/list",
      customers: [],
      // form: { first_name: "", last_name: "", email: "", isEdit: false },
      form: {name: "", isEdit: false },
      loader: false
    };
  },
  methods: {
    //Get 
    getCustomers() {
      this.loader = true;
      axios.get(this.url).then(data => {
        this.customers = data.data;
        this.loader = false;
      });
    },

    // Delete
    // deleteCustomer(id) {
    //   this.loader = true;

    //   axios
    //     .delete(`${this.url}/${id}`)
    //     .then(() => {
    //       this.getCustomers();
    //     })
    //     .catch(e => {
    //       alert(e);
    //     });
    // },

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
          this.getCustomers();
        })
        .catch(e => {
          alert(e);
        });
    },

    // Edit
    editCustomer(data) {
      this.loader = true;
      axios
        .put(`${this.url}/${data.category_id}`, {
          // first_name: data.first_name,
          // last_name: data.last_name,
          name: data.name, 
          // email: data.email
        })
        .then(() => {
          console.log("hello");
          this.getCustomers();
        })
        .catch(e => {
          alert(e);
        });
    },
    onDelete(category_id) {
      // window.console.log("app delete " + id);
      this.deleteCustomer(category_id);
    },
    onEdit(data) {
        this.form = data;
        this.form.isEdit = true;
    },
    onFormSubmit(data) {
      // window.console.log("app onFormSubmit", data);
      if (data.isEdit) {
        // call edit customer
        this.editCustomer(data);
      } else {
        // call create customer
        this.createCustomer(data);
      }
    }
  },
  created() {
    this.getCustomers();
  }
};
</script>

<style>
.vue-color {
  background: #41b883 !important;
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
