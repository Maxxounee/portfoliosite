<template>
  <div class="modal__wrapper">
    <div class="modal">
      <div class="modal__container">
        <form @submit.prevent class="modal__telegram tg-modal">
          <div class="tg-modal__header">
            <h2 class="tg-modal__title">
              telegram_api — Send message
            </h2>
          </div>
          <div class="tg-modal__input-container">

            <label for="name">name ~ %</label>
            <input
                v-model="message.name"
                type="text"
                class="tg-modal__input_name"
                name="name"
                required>
          </div>
          <div class="tg-modal__input-container">
            <label for="contacts">contacts ~ %</label>
            <input
                v-model="message.contact"
                type="text"
                class="tg-modal__input_contacts"
                name="contacts"
                required
            >
          </div>
          <div class="tg-modal__input-container">
            <label for="text">message ~ %</label>
            <textarea
                v-model="message.text"
                class="tg-modal__input_text"
                name="text"
                required
            ></textarea>
          </div>
          <div class="tg-modal__success">
            {{ successMessage }}
          </div>

          <div class="tg-modal__buttons-container">
            <button
                @click="sendMessage" type="submit"
                class="tg-modal__button"
                :class="{_active: message.text && message.name && message.contact  }"
            >
              SEND
            </button>
            <button
                @click.prevent="clearModal"
                type="reset"
                class="tg-modal__button"
                :class="{_active: message.text || message.name || message.contact  }"
            >CLEAR
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
  props: ['message'],
  data() {
    return {
      successMessage: "This message will be sent to me on Telegram"
    }
  },
  methods: {
    clearModal() {
      this.$emit('clearModal')
    },
    toggleModal() {
      this.$emit('toggleModal')
    },
    sendMessage() {
      if (this.message.text & this.message.name & this.message.contact) {
        this.successMessage = "M"
        let message = "essage has been sent"
        let i = 0
        let interval = setInterval(() => {
          if (i < message.length)
            this.successMessage += message[i]
          i += 1
        }, 100)
        setTimeout(() => {
          clearInterval(interval)
          this.$emit('sendMessage')
          this.successMessage = "This message will be sent to me on Telegram"
        }, 3000)
      }
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
  background-color: rgb(24, 24, 24);
  border-radius: 10px;
  border: 1px solid rgba(80, 80, 80);
  width: 600px;
  height: 350px;
  padding-top: 40px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
}

.tg-modal__input-container {
  display: flex;
}


._active_modal {
  display: block;
}


.modal__container {
  height: 100%;
  padding: 0 10px;
}

.modal__telegram {

}

.tg-modal {
  height: 100%;
  display: flex;
  flex-direction: column;

}

.tg-modal__header {
  position: absolute;
  top: 0;
  left: 0;
  padding: 3px;
  border-radius: 10px 10px 0 0;
  width: 100%;
  background-color: #232426;
}

.tg-modal__title {
  font-size: 14px;
  text-align: center;
}

.tg-modal__title span {
  color: #575757;
}

label {
  color: #9d9d9d;
  margin-right: 7px;
  font-weight: 300;
}

.tg-modal__input_name,
.tg-modal__input_contacts,
.tg-modal__input_text {
  flex-grow: 1;
}

.tg-modal__input_name,
.tg-modal__input_contacts,
.tg-modal__input_text,
label {
  background-color: inherit;
  font-size: 17px;

}

.tg-modal__input_text {
  height: 150px;
  resize: none;
}

.tg-modal__success {
  color: darkgreen;
  font-weight: 300;
}

.tg-modal__buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.tg-modal__button:not(:last-child) {
  margin-right: 10px;
}

.tg-modal__button {
  transition: all 0.3s ease 0s;
  scale: 1;
  padding: 7px;
  width: 150px;
  height: 50px;
  border: 1px dashed #812c2c;
  background-color: inherit;
  color: #812c2c;
  font-size: 30px;
  font-weight: 300;
  cursor: unset;
  display: flex;
  align-items: center;
  justify-content: center;
}

._active {
  cursor: pointer;
  color: darkgreen;
  border: 1px dashed darkgreen;
}


.modal__close-btn {
  z-index: 10;
  display: block;
  position: absolute;
  background-color: #812c2c;
  border-radius: 50%;
  top: 6px;
  left: 10px;
  height: 15px;
  width: 15px;
  cursor: pointer;
}


@media (max-width: 700px) {
  .modal {
    width: 80%;

  }
}


@media (max-width: 460px) {
  .tg-modal__button {
    font-size: 20px;
    width: 100px;
  }

  .tg-modal__header {
    font-size: 15px;
  }
}
</style>