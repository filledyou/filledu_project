<template>
  <div class="controller">
    <div class="select">
      <label for="order">Order</label>
      <select name="order" id="order" class="selectbox">
        <option value="date-asc">Date Ascending</option>
        <option value="date-desc">Date Descending</option>
        <option value="name-asc">name Ascending</option>
        <option value="name-desc">name Descending</option>
      </select>
    </div>
    <button class="clear">clear All</button>
  </div>
</template>