<template>
  <div class="conatiner">
    <div class="category-list">
      <div class="data">
        <table class="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Publish Status</th>
              <th>Category</th>
              <th>Discount</th>
              <th>Buy One Get One</th>
              <th>waiting Time</th>
              <th>Description</th>
              <th class="text-center">Opertaion</th>
            </tr>
          </thead>
          <tbody>
            <Pizza
              v-for="product in products"
              :key="product.pizza_id"
              :product="product"
              @onDelete="onDelete"
              @onEdit="onEdit"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Pizza from "./Pizza.vue";
export default {
  name: "PizzaList",
  components: {
    Pizza,
  },
  props: {
    products: {
      type: Array,
    },
  },
  methods: {
    onDelete(pizza_id) {
      this.$emit("onDelete", pizza_id);
    },
    onEdit(data) {
      this.$emit("onEdit", data);
    },
  },
};
</script>

<style scoped></style>
