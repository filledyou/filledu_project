<template>
  <div class="add">
    <input type="text" class="add_input" placeholder="Enter your task" v-model="newTodoItem">
    <button class="add_button">
      <span class="blind">ADD</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ""
    }
  }
}
</script>

<style scoped>

</style>