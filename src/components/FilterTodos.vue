<template>
  <div>
      Filter Todos:
      <select @change="filterTodos($event)">
        <option value="200">200</option>
        <option value="100">100</option>
        <option value="50">50</option>
        <option value="20">20</option>
        <option value="10">10</option>
      </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "FilterTodos",
    methods: mapActions(["filterTodos"])
};
</script>

<style>
select {
    margin-top: 20px;
    padding: 8px;
    border: #ddd 1 solid;
    font-family: 'TheGoodMonolith','Major Mono Display', "Jura","dos", DOS, Monaco, Menlo, Consolas, "Courier New", monospace;
    flex: 10;
    padding: 8px;
    outline: 0;
    font-size: 16px;
    background-color: #666;
    color: #fff ;
    border: 0px;
    margin-bottom: 20px;
}
select {
    -webkit-appearance: none;
    -moz-appearance: none;
}
</style>