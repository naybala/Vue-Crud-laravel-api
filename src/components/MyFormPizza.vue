<template>
  <div class="my-form">
    <form class="ui form">
      <div class="fields">
        <div class="four wide field">
          <label>Pizza Name </label>
          <input
            type="text"
            name="name"
            placeholder="Add Pizza Name"
            @change="handleChange"
            :value="form.name"
            autocomplete="off"
          />
        </div>
        <div class="four wide field">
          <label>Pizza Price </label>
          <input
            type="text"
            name="price"
            placeholder="mmk"
            @change="handleChange"
            :value="form.price"
            autocomplete="off"
          />
        </div>
        <div class="four wide field">
          <label>Discount </label>
          <input
            type="text"
            name="discount"
            placeholder="mmk"
            @change="handleChange"
            :value="form.discount_price"
            autocomplete="off"
          />
        </div>
        <div class="four wide field">
          <label>Waiting Time</label>
          <input
            type="text"
            name="waitingTime"
            placeholder="minutes"
            @change="handleChange"
            :value="form.waiting_time"
            autocomplete="off"
          />
        </div>
      </div>
      <div class="fields">
        <div class="six wide field">
          <label>Publish Status</label>
          <select
            class="form-select form-select-sm"
            name=""
            :value="form.publish_status"
            @change="handleChange"
          >
            <option value="1">On</option>
            <option value="0">Off</option>
          </select>
        </div>
        <div class="six wide field">
          <label>Category </label>
          <select class="form-select form-select-sm" @change="handleChange" name="">
            <option v-for="item in 10" :key="item._id" :item="item">
              {{ item }}
            </option>
          </select>
        </div>
        <div class="six wide field">
          <label>Buy One Get One Status </label>
          <select
            class="form-select form-select-sm"
            @change="handleChange"
            name=""
            :value="form.buy_one_get_one_status"
          >
            <option value="1">On</option>
            <option value="0">Off</option>
          </select>
        </div>
      </div>

      <div class="d-grid gap-2 six wide field float-end mb-3">
        <button :class="btnClass" @click="onFormSubmit">
          {{ btnName }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "MyForm",
  data() {
    return {
      btnName: "Save",
      btnClass: "ui primary button submit-button ",
    };
  },
  props: {
    form: {
      type: Object,
    },
  },
  methods: {
    handleChange(event) {
      const { name, value } = event.target;
      let form = this.form;
      form[name] = value;
    },
    onFormSubmit(event) {
      // prevent form submit
      event.preventDefault();

      // form validation
      if (this.formValidation()) {
        this.$emit("onFormSubmit", this.form);

        // change the button to save
        this.btnName = "Save";
        this.btnClass = "ui primary button submit-button";

        // clear form fields
        this.clearFormFields();
      }
    },
    formValidation() {
      //name
      if (document.getElementsByName("name")[0].value === "") {
        alert("Enter Name");
        return false;
      }
      return true;
    },
    clearFormFields() {
      this.form.name = "";
      this.form.isEdit = false;
      document.querySelector(".form").reset();
    },
  },
  updated() {
    if (this.form.isEdit) {
      this.btnName = "Update";
      this.btnClass = "ui orange button submit-button";
    }
  },
};
</script>
