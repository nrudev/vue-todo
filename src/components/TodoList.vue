<template>
  <section>
    <transition-group name="list" tag="ul">
      <li
        v-for="(todoItem, index) in this.storedTodoItems"
        v-bind:key="todoItem.todo"
        v-bind:class="{ textDone: todoItem.isDone }"
      >
        <span
          class="checkBtn"
          v-bind:class="{ checkBtnDone: todoItem.isDone }"
          @click="toggleItem({ todoItem, index })"
          ><i class="fa-solid fa-check"></i
        ></span>
        {{ todoItem.todo }}
        <span class="removeBtn" @click="removeItem({ todoItem, index })"
          ><i class="fa-solid fa-trash-can"></i
        ></span>
      </li>
    </transition-group>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations({
      removeItem: 'removeOneTodo',
      toggleItem: 'toggleOneTodo',
    }),
  },
  computed: {
    ...mapGetters(['storedTodoItems']),
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

/* Transition */
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
