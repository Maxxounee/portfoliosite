<template>
  <div class="modal__wrapper">
    <div class="modal">
      <div class="modal__container _container">
        <form @submit.prevent class="modal__telegram tg-modal">
          <h2 class="tg-modal__header">
            <span
                v-html="localization['modal_title']">
            </span>
          </h2>
          <input
              v-model="message.name"
              type="text"
              class="tg-modal__input_name"
              name="name"
              :placeholder="localization['modal_name']"
              required>
          <input
              v-model="message.contact"
              type="text"
              class="tg-modal__input_contacts"
              name="contacts"
              :placeholder="localization['modal_contacts']"
              required
          >
          <textarea
              v-model="message.text"
              class="tg-modal__input_text"
              name="text"
              :placeholder="localization['modal_message']"
              required
          ></textarea>
          <div class="tg-modal__buttons-container">
            <button
                @click="sendMessage" type="submit"
                class="tg-modal__button"
                :class="{_active: message.text && message.name && message.contact  }"
            >
              <span
                  v-html="localization['modal_send']">
            </span>
            </button>
            <button
                @click.prevent="clearModal"
                type="reset"
                class="tg-modal__button"
                :class="{_active: message.text || message.name || message.contact  }"
            ><span
                v-html="localization['modal_clear']">
            </span>
            </button>
          </div>
        </form>

        <div @click="toggleModal" class="modal__close-btn"><span></span></div>

      </div>
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


.modal__wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  display: none;
  background-color: transparent;
  z-index: 15;

}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  width: 600px;
  height: 350px;
  padding: 20px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);


}

._active_modal {
  display: block;
}


.modal__container {
  height: 100%;
}

.modal__telegram {

}

.tg-modal {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.tg-modal__header {
}

.tg-modal__input_name,
.tg-modal__input_contacts,
.tg-modal__input_text {
  width: 100%;
  padding: 5px 10px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  border: 1px solid rgba(128, 128, 128, 0.68);
  font-size: 17px;
}

.tg-modal__input_text {
  height: 100px;
  resize: none;
}

.tg-modal__buttons-container {
  display: flex;
}

.tg-modal__button:not(:last-child) {
  margin-right: 10px;
}

.tg-modal__button {
  transition: all 0.3s ease 0s;
  scale: 1;
  padding: 7px;
  width: 100px;
  border-radius: 20px;
  background-color: #070707;
  color: #f6f6f6;
  opacity: 0.6;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  cursor: unset;
}

._active {
  opacity: 1 !important;
  cursor: pointer;
}

.tg-modal__button._active:hover {
  scale: 1.01;
}

.tg-modal__button._active:active {
  scale: 0.99;
}

.modal__close-btn {
  z-index: 10;
  display: block;
  position: absolute;
  top: 25px;
  right: 20px;
  height: 30px;
  width: 30px;
  cursor: pointer;
}

.modal__close-btn::before,
.modal__close-btn::after {
  left: 0;
  position: absolute;
  height: 10%;
  width: 100%;
  background-color: #070707;
}

.modal__close-btn::before,
.modal__close-btn::after {
  content: "";
}


.modal__close-btn::before {
  top: 50%;
  transform: rotate(45deg) translate(-3%, -50%);
}

.modal__close-btn::after {
  bottom: 50%;
  transform: rotate(-45deg) translate(-1%, 50%);
}

@media (max-width: 700px) {
  .modal {
    width: 80%;

  }
}

@media (max-width: 500px) {
  .modal__close-btn {
    scale: 0.6;
    top: 17px;
  }

  .modal__container {
    padding: 0;
  }
}

@media (max-width: 400px) {
  .tg-modal__button {
    width: 80px;
  }

  .tg-modal__header {
    font-size: 15px;
  }
}
</style>