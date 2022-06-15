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
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary me-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        @click="onEdit"
      >
        Edit
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Edit Something</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body text-start">
              <MyFormPizzaVue />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-danger" @click="onDelete">Delete</button>
    </td>
  </tr>
</template>

<script>
import MyFormPizzaVue from "./MyFormPizza.vue";

export default {
  name: "Pizza",
  props: {
    product: {
      type: Object,
    },
  },

  methods: {
    onDelete() {
      this.$emit("onDelete", this.category.pizza_id);
    },
    onEdit() {
      this.$emit("onEdit", this.product);
    },
  },
  components: { MyFormPizzaVue },
};
</script>

<style scoped></style>
