<template>
  <div class="modal" v-if="isOpen" @click="handleBackdropClick">
    <div class="modal-content" @click.stop>
      <span class="close" @click="closeModal">&times;</span>
      <h2>{{ lesson.title }}</h2>
      <ul class="contents-list">
        <li v-for="(item, idx) in lesson.contents" :key="idx" class="content-item">
          <span class="item-number">{{ idx + 1 }}.</span> {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
    lesson: Object
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    handleBackdropClick(event) {
      if (event.target === event.currentTarget) {
        this.closeModal();
      }
    }
  }
};
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
}
.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.contents-list {
  list-style-type: none;
  padding-left: 0;
}
.content-item {
  margin: 10px 0;
  padding: 10px;
  border-left: 4px solid #e91818;
  background-color: #f9f9f9;
  border-radius: 4px;
}
.item-number {
  font-weight: bold;
  margin-right: 8px;
}
</style>
