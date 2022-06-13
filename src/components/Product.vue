<template>
  <tr>
    <td>{{ product.product_id }}</td>
    <td>{{ product.product_name }}</td>
    <td class="text-center">
      <button class="btn btn-primary me-1" @click="onEdit">Edit</button>
      <button class="btn btn-danger" @click="onDelete">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: {
      type: Object,
    },
  },
  methods: {
    onDelete() {
      this.$emit("onDelete", this.product.product_id);
    },
    onEdit() {
      this.$emit("onEdit", this.product);
    },
  },
};
</script>

<style scoped></style>
