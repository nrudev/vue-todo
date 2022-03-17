<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodo" @keyup.enter="addTodo" />
    <span class="addContainer" @click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>
    <Modal v-if="showModal" @close="showModal = false">
      <div slot="header">
        <h3>경고!</h3>
      </div>
      <div slot="body">
        <p>글을 입력해주세요!</p>
      </div>
      <span slot="footer"></span>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/AppModal.vue';

export default {
  data() {
    return {
      newTodo: '',
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.$emit('addTodo', this.newTodo);
      } else {
        this.showModal = true;
      }
      this.clearInput();
    },
    clearInput() {
      this.newTodo = '';
    },
  },
  components: {
    Modal,
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background-color: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  height: 40px;
  width: 80%;
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #0099a4, #00498c);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.addBtn {
  color: white;
  vertical-align: middle;
  font-size: 30px;
}
</style>
