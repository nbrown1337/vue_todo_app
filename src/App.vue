<template>
  <div id="app">
    <Header />
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue';
import Todos from './components/Todos.vue';
import AddTodo from './components/AddTodo.vue';

export default {
  name: 'app',
  components: {
    Header,
    Todos,
    AddTodo,
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'Todo #1',
          completed: false,
        },
        {
          id: 2,
          title: 'Todo #2',
          completed: true,
        },
        {
          id: 3,
          title: 'Todo #3',
          completed: false,
        },
      ]
    }
  },
  methods: {
     deleteTodo(id){
       this.todos = this.todos.filter(todo => todo.id !== id);
     },
     addTodo(newTodoObj){
       this.todos = [...this.todos, newTodoObj]
     }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }
  .btn:hover {
    background: #666;
  }
</style>
