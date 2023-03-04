<template>
  <section class="page__contacts contacts _page-section_5">
    <div class="contacts__container _container">
      <div class="contacts__header">
        <h1 class="contacts__title title-block"><span v-html="localization['title']"></span></h1>
        <div class="contacts__text text-block">
          <span v-html="localization['text']"></span>
        </div>
      </div>
      <button @click="toggleModal" class="contacts__button"><span v-html="localization['send']"></span></button>
      <div class="_tip">
        <span v-html="localization['tip']"></span>
        <img src="@/assets/img/arrow.png" alt="arrow">
      </div>
      <div class="contacts__links">
        <a href="https://github.com/Maxxounee"
        ><img src="@/assets/img/contacts/contacts_github.png" alt="github"
        /></a>
        <a href="https://t.me/maxounee"
        ><img src="@/assets/img/contacts/contacts_telegram.png" alt="telegram"
        /></a>
        <a href="https://instagram.com/vldmrv.ph"
        ><img src="@/assets/img/contacts/contacts_instagram.png" alt="instagram"
        /></a>
      </div>
      <div class="contacts__info">
        <span v-html="localization['footer']"></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['localization'],
  methods: {
    toggleModal() {
      this.$emit('toggleModal')
    }
  }
}
</script>

<style scoped>
._tip {
  position: absolute;
  left: -100px;
  bottom: 166px;
  transform: rotate(10deg);
}

._tip span {
  width: 120px;
  position: absolute;
  font-weight: 300;
  font-size: 12px;
  color: rgba(157, 157, 157, 0.5);
  text-align: center;
  line-height: 15px;
}

._tip img {
  height: 40px;
  transform: rotate(90deg) translate(-7px, -100px);
  filter: invert() opacity(0.3);
}

@media (max-width: 550px) {
  ._tip {
    left: -20px;
    bottom: 155px;
    transform: rotate(10deg);
  }
}

.page__contacts {
  max-width: 342px;
  margin: 0 auto;
  padding-bottom: 123px;
}

.contacts__container {
  padding-top: 30px;
  position: relative;
}

.contacts__header {
  margin-bottom: 30px;
}

.contacts__title {
  margin-bottom: 30px;
}

.contacts__text span {
  color: #9d9d9d
}

@media (max-width: 700px) {

  .contacts__text span {
    font-size: 14px;
  }
}

.contacts__button {
  display: block;
  width: 100%;
  height: 42px;
  border-radius: 20px;
  background-color: #222326;
  background-image: url("@/assets/img/noise.png");
  background-size: 200px 200px;
  margin-bottom: 60px;
  color: white;
  padding: 4px 30px;
}

.contacts__button:hover {
  transform: scale(1.01) translate(0px, -1px);
  filter: drop-shadow(2px 3px 7px rgba(0, 0, 0, 0.3));
  transition: all 0.1s ease 0s;
}

.contacts__button:active {
  transform: scale(0.99) translate(0px, 0px);
  filter: none;
}

.contacts__links {
  margin-bottom: 45px;
  display: flex;
  justify-content: space-between;
  filter: contrast(50%);
}

a {
  display: flex;
  height: 50px;
  width: 50px;
  justify-content: center;
}

a img {
  width: 40px;
  height: 40px;
  transition: all 0.1s ease 0s;
}

a img:hover {
  width: 42px;
  height: 42px;
}

a img:active {
  width: 39px;
  height: 39px;
}

.contacts__info {
  text-align: center;
  font-size: 14px;

  font-weight: 300;
}

.contacts__info span {
  color: #6e6e6e;
}
</style>