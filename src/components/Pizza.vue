<template>
  <tr>
    <td>{{ product.pizza_id }}</td>
    <td>{{ product.pizza_name }}</td>
    <td>{{ product.price }} mmk</td>
    <td v-if="product.publish_status == 1">in Stock</td>
    <td v-else>out of stock</td>
    <td>{{ product.category_id }}</td>
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
  data() {
    return {
      url: "http://127.0.0.1:8000/api/category/list",
      categories: [],
    };
  },
  methods: {
    onDelete() {
      this.$emit("onDelete", this.category.pizza_id);
    },
    onEdit() {
      this.$emit("onEdit", this.product);
    },
    getCategories() {
      axios.get(this.url).then((data) => {
        console.log(data.category_id);
        this.categories = data.data;
      });
    },
  },
};
</script>

<style scoped></style>
