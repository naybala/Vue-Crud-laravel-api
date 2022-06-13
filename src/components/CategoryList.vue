<template>
  <div class="conatiner">
    <div class="category-list">
      <div class="data">
        <table class="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th class="text-center">Opertaion</th>
            </tr>
          </thead>
          <tbody>
            <Category
              v-for="category in categories"
              :key="category.category_id"
              :category="category"
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
import Category from "./Category.vue";
export default {
  name: "CategoryList",
  components: {
    Category,
  },
  props: {
    categories: {
      type: Array,
    },
  },
  methods: {
    onDelete(category_id) {
      this.$emit("onDelete", category_id);
    },
    onEdit(data) {
      this.$emit("onEdit", data);
    },
  },
};
</script>

<style scoped></style>
