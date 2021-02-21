<template>
  <div id="app">
    <TodoHeader/>
    <TodoTitle/>
    <TodoInput/>
    <TodoController/>
    <TodoList/>
    <TodoFooter/>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader';
import TodoTitle from './components/TodoTitle';
import TodoController from './components/TodoController';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFooter from "./components/TodoFooter";

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoController,
    TodoList,
    TodoTitle,
    TodoFooter,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
