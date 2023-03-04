<template>

  <div class="modal">
    <div class="modal__container _container">
      <h1 class="modal__success"><span
          v-html="localization['modal_success']"></span></h1>

    </div>
  </div>
</template>

<script>

export default {
  props: ['message', 'localization'],

  methods: {
    clearModal() {
      this.$emit('clearModal')
    },
    toggleModal() {
      this.$emit('toggleModal')
    },
    sendMessage() {
      this.$emit('sendMessage')
    }
  }
}
</script>

<style scoped>


.modal {
  display: block;
  opacity: 1;
  z-index: 15;
  position: fixed;
  top: 50%;
  left: -300%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  width: 600px;
  height: 200px;
  padding: 20px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}


._active_success {
  left: 50%;
  transition: opacity 1.5s ease 1.5s;
  opacity: 0;
}

.modal__container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.modal__success {
  font-size: 40px;
}

@media (max-width: 700px) {
  .modal {
    width: 80%;
    height: 25vw;
  }

  .modal__success {
    font-size: 4vw;
  }
}
</style>