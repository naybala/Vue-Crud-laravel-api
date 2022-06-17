<template>
  <div class="my-form">
    <label>Pizza Details </label>
    <form class="ui form">
      <div class="fields">
        <div class="four wide field">
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
          <input
            type="text"
            name="price"
            placeholder="Add ZAy"
            @change="handleChange"
            :value="form.price"
            autocomplete="off"
          />
        </div>
        <div class="four wide field">
          <input
            type="text"
            name="price"
            placeholder="Add ZAy"
            @change="handleChange"
            :value="form.price"
            autocomplete="off"
          />
        </div>
        <div class="four wide field">
          <input
            type="text"
            name="price"
            placeholder="Add ZAy"
            @change="handleChange"
            :value="form.price"
            autocomplete="off"
          />
        </div>
      </div>
      <div class="fields">
        <div class="six wide field">
          <select class="form-select form-select-sm" aria-label=".form-select-sm example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </select>
        </div>
        <div class="six wide field">
          <select class="form-select form-select-sm" aria-label=".form-select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="six wide field">
          <select class="form-select form-select-sm" aria-label=".form-select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>

      <div class="d-grid gap-2">
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
      btnClass: "ui primary button submit-button",
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
