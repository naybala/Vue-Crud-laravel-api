<template>
  <tr>
    <td>{{ category.category_id }}</td>
    <td>{{ category.category_name }}</td>
    <td class="text-center">
      <button class="btn btn-primary me-1" @click="onEdit">Edit</button>
      <button class="btn btn-danger" @click="onDelete">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "Category",
  props: {
    category: {
      type: Object,
    },
  },
  methods: {
    onDelete() {
      this.$emit("onDelete", this.category.category_id);
    },
    onEdit() {
      this.$emit("onEdit", this.category);
    },
  },
};
</script>

<style scoped></style>
