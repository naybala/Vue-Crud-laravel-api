<template>
  <tr>
    <td>{{ category.category_id }}</td>
    <td>{{ category.category_name }}</td>
    <td>
      <button class="mini ui blue button" @click="onEdit">Edit</button>
      <button class="mini ui red button" @click="onDelete">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "Category",
  props: {
    category: {
      type: Object
    }
  },
  methods: {
    onDelete() {
      // console.log("customer delete " + this.customer.id);
      this.$emit("onDelete", this.category.category_id);
    },
    onEdit() {
      // console.log("customer edit " + this.customer.id);
      this.$emit("onEdit", this.category);
    }
  }
};
</script>

<style scoped></style>
