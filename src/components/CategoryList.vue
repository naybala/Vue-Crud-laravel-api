<template>
  <div class="category-list">
    <div class="data">
      <table class="ui celled table">
        <thead>
          <tr>
            <th style="width: 50px; text-align: center;">#</th>
            <th>Name</th>
            <!-- <th>E-mail</th> -->
            <th style="width: 148px;">Action</th>
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
</template>

<script>
import Category from "./Category.vue";
export default {
  name: "CategoryList",
  components: {
    Category
  },
  props: {
    categories: {
      type: Array
    }
  },
  methods: {
    onDelete(category_id) {
      //console.log("customer list delete " + id);
      this.$emit("onDelete", category_id);
    },
    onEdit(data) {
      //console.log("customer list edit " + data);
      this.$emit("onEdit", data);
    }
  }
};
</script>

<style scoped></style>
