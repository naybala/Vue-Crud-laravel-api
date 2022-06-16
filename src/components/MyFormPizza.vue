<template>
  <form>
    <div class="mb-3">
      <label class="form-label">Name</label>
      <input
        type="text"
        class="form-control"
        name="name"
        @change="handleChange"
        placeholder="on/off"
        autocomplete="off"
      />
      // :value="form.name"
    </div>
    <div class="mb-3">
      <label class="form-label">Price</label>
      <input type="text" class="form-control" />
    </div>
    <div class="mb-3">
      <label class="form-label">Publish Status</label>
      <input type="text" class="form-control" />
    </div>
    <div class="mb-3">
      <label class="form-label">Category</label>
      <input type="text" class="form-control" />
    </div>
    <div class="mb-3">
      <label class="form-label">Discount</label>
      <input type="text" class="form-control" />
    </div>
    <div class="mb-3">
      <label class="form-label">Buy One Get One</label>
      <input type="text" class="form-control" />
    </div>
    <div class="mb-3">
      <label class="form-label">Waiting Time</label>
      <input type="text" class="form-control" />
    </div>
    <div class="mb-3">
      <label class="form-label">Description</label>
      <input type="text" class="form-control" />
    </div>
  </form>
</template>

<script>
export default {
  name: "MyFormPizza",
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
        // this.btnName = "Save";
        // this.btnClass = "ui primary button submit-button";

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
};
</script>
