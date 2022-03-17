<template>
  <section>
    <ul>
      <li
        v-for="todoItem in todoList"
        v-bind:key="todoItem.todo"
        v-bind:class="{ textDone: todoItem.isDone }"
      >
        <span
          class="checkBtn"
          v-bind:class="{ checkBtnDone: todoItem.isDone }"
          @click="toggleItem(todoItem.todo)"
          ><i class="fa-solid fa-check"></i
        ></span>
        {{ todoItem.todo }}
        <span class="removeBtn" @click="removeItem(todoItem.todo)"
          ><i class="fa-solid fa-trash-can"></i
        ></span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      todoList: [],
    };
  },
  created: function () {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.todoList.push(
          JSON.parse(localStorage.getItem(localStorage.key(i)))
        );
      }
    }
  },
  methods: {
    removeItem(key) {
      localStorage.removeItem(key);
    },
    toggleItem(key) {
      const obj = {
        todo: key,
        isDone: !JSON.parse(localStorage.getItem(key)).isDone,
      };
      localStorage.setItem(key, JSON.stringify(obj));
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin: 5px 15px 0 0;
  cursor: pointer;
}
.checkBtnDone {
  color: #95a5a6;
}
.textDone {
  color: #95a5a6;
  text-decoration: line-through;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
  cursor: pointer;
}
</style>
