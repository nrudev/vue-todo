const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
    return arr;
  },
};

const state = {
  headerText: 'My TODO',
  todoList: storage.fetch(),
};

const getters = {
  getHeaderText(state) {
    return state.headerText;
  },
  storedTodoItems(state) {
    return state.todoList;
  },
};

const mutations = {
  addOneTodo(state, newTodo) {
    const obj = { todo: newTodo, isDone: false };
    localStorage.setItem(obj.todo, JSON.stringify(obj));
    state.todoList.push(obj);
  },
  removeOneTodo(state, payload) {
    localStorage.removeItem(payload.todoItem.todo);
    state.todoList.splice(payload.index, 1);
  },
  toggleOneTodo(state, payload) {
    const obj = {
      todo: payload.todoItem.todo,
      isDone: !JSON.parse(localStorage.getItem(payload.todoItem.todo)).isDone,
    };
    localStorage.setItem(payload.todoItem.todo, JSON.stringify(obj));
    state.todoList[payload.index].isDone =
      !state.todoList[payload.index].isDone;
  },
  clearAllItems(state) {
    localStorage.clear();
    state.todoList = [];
  },
};

export default {
  state,
  getters,
  mutations,
};
