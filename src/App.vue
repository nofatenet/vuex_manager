<template>
  <div id="app">
    <div class="container">
      <AddTodo/>
      <FilterTodos/>
      <Todos/>
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo.vue'
import FilterTodos from './components/FilterTodos.vue'

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
    FilterTodos
  }
}
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/major-mono-display-2');
@import url('https://fonts.cdnfonts.com/css/thegoodmonolith');

body {
	margin: 0;
	font-family: 'TheGoodMonolith','Major Mono Display',"dos", DOS, Monaco, Menlo, Consolas, "Courier New", monospace;
	font-size: 16px;
	color: #ccc;
	background-color: #000084;
}

.container {
  max-width: 800px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}

.btn {
  font-family: 'TheGoodMonolith','Major Mono Display', "Jura","dos", DOS, Monaco, Menlo, Consolas, "Courier New", monospace;
	display: inline-block;
	padding: 0 10px;
	margin-bottom: 20px;
	font-size: 18px;
	line-height: 20px;
	color: #000000;
	text-align: center;
	vertical-align: middle;
	cursor: default;
	background: #bbbbbb;
	border: 0px;
	border-width: 0;
	border-radius: 0;
  box-shadow: 10px 10px 0 #000000;
}

</style>
