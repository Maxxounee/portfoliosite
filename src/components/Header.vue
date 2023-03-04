<template>
  <header class="header">
    <div class="header__container _container">
      <nav class="header__body">
        <ul class="header__menu menu">
          <li>
            <a @click.prevent="scrollToHome" href="#" class="header__link"
            >{{ localization['home'] }}</a
            >
          </li>
          <li>
            <a @click.prevent="scrollToAbout" href="#" class="header__link"
            >{{ localization['about'] }}</a
            >
          </li>
          <li>
            <a @click.prevent="scrollToSkills" data-goto="._page-section_3" href="#" class="header__link"
            >{{ localization['skills'] }}</a
            >
          </li>
          <li>
            <a @click.prevent="scrollToPortfolio" href="#" class="header__link"
            >{{ localization['portfolio'] }}</a
            >
          </li>
          <li>
            <a @click.prevent="scrollToContacts" href="#" class="header__link"
            >{{ localization['contacts'] }}</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>

export default {
  props: ['localization'],
  methods: {
    // scrollDocument() {
    //   this.$emit('scrollDocument')
    // },
    scrollToHome() {
      this.$emit('scrollToHome')
    },
    scrollToAbout() {
      this.$emit('scrollToAbout')
    },
    scrollToSkills() {
      this.$emit('scrollToSkills')
    },
    scrollToPortfolio() {
      this.$emit('scrollToPortfolio')
    },
    scrollToContacts() {
      this.$emit('scrollToContacts')
    },
  }
}
</script>

<style scoped>
.header {
  display: block;
  position: absolute;
  width: 100%;
  /*background-color: #fff;*/
  z-index: 8;
}

.header._active a {
  color: #9d9d9d;
}

._headerhide {
  top: -183%;
  position: fixed;
  opacity: 70%;
  background-color: #222326;
}

._headerhide .header__menu {
  padding-top: 50px;
  padding-bottom: 10px;
  border-bottom: none;
}

.header__menu {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #828282;
  padding: 33px 0 32px;
}

.header__link {
  mix-blend-mode: difference;
}

.header__link:hover {
  text-decoration: underline;
}

.header__container,
.header__body,
.header._active {
  height: 100%;
  height: 100%;
}

.header._active {
  top: 0 !important;
  opacity: 1 !important;
  backdrop-filter: blur(4px);
  transition: all 0.3s ease 0s;
  position: fixed !important;
  background-color: rgba(0, 0, 0, 0.8) !important;
}

.header._active .header__menu {
  height: 100%;
  padding: 80px 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-bottom: none;
  color: white;
  font-size: 40px;
  font-weight: 300;
}


@media (max-width: 530px) {
  .header {
    font-size: 15px;
    top: -200px;
  }
}

@media (max-width: 380px) {
  .header {
    font-size: 12px;
    top: -200px;
  }
}

@media (max-height: 450px) {
  .header._active .header__menu {
    padding: 40px 0;
    font-size: 30px;
  }
}
</style>