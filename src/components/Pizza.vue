<template>
  <tr>
    <td>{{ product.pizza_id }}</td>
    <td>{{ product.pizza_name }}</td>
    <td>{{ product.price }} mmk</td>
    <td v-if="product.publish_status == 1">in Stock</td>
    <td v-else>out of stock</td>
    <td>{{ product.category_name }}</td>
    <td>{{ product.discount_price }} mmk</td>
    <td v-if="product.buy_one_get_one_status == 1">Buy One Get One</td>
    <td v-else>Off</td>
    <td>{{ product.waiting_time }} min</td>
    <td>{{ product.description }}</td>
    <td class="text-center">
      <button class="btn btn-primary me-1" @click="onEdit">Edit</button>
      <button class="btn btn-danger" @click="onDelete">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "Pizza",

  props: {
    product: {
      type: Object,
    },
  },

  methods: {
    onDelete() {
      this.$emit("onDelete", this.product.pizza_id);
    },
    onEdit() {
      this.$emit("onEdit", this.product);
    },
  },
};
</script>

<style scoped></style>
