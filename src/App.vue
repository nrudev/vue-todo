<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input @addTodo="addOneTodo"></todo-input>
    <todo-list
      v-bind:propsdata="todoList"
      @removeItem="removeOneTodo"
      @toggleItem="toggleOneTodo"
    ></todo-list>
    <todo-footer @clearAll="clearAllItems"></todo-footer>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      todoList: [],
    };
  },
  methods: {
    addOneTodo(newTodo) {
      const obj = { todo: newTodo, isDone: false };
      localStorage.setItem(obj.todo, JSON.stringify(obj));
      this.todoList.push(obj);
    },
    removeOneTodo(key, index) {
      localStorage.removeItem(key);
      this.todoList.splice(index, 1);
    },
    toggleOneTodo(key, index) {
      const obj = {
        todo: key,
        isDone: !JSON.parse(localStorage.getItem(key)).isDone,
      };
      localStorage.setItem(key, JSON.stringify(obj));
      this.todoList[index].isDone = !this.todoList[index].isDone;
    },
    clearAllItems() {
      localStorage.clear();
      this.todoList = [];
    },
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.todoList.push(
          JSON.parse(localStorage.getItem(localStorage.key(i)))
        );
      }
    }
  },
};
</script>

<style>
body {
  background-color: blanchedalmond;
  text-align: center;
  color: #001432;
  font-family: 'Ubuntu', sans-serif;
  user-select: none;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
