<template>
  <section class="page__welcome welcome _page-section_1">
    <div class="welcome__container _container">
      <div class="welcome__header header-welcome">
        <div class="header-welcome__block welcome-name">
          <span v-html="localization['name']"></span>
        </div>
        <div class="header-welcome__block welcome-about">
          <span v-html="localization['about']"></span>
        </div>

        <div class="header-welcome__block welcome-language">
          <a
              @click.prevent="changeLang"
              href=""
              class="welcome-language__button"
              :class="{_active_language: language === 'RU'}"
          >
            RU
          </a>
          <div class="welcome-language__separator">|</div>
          <a
              @click.prevent="changeLang"
              href=""
              class="welcome-language__button"
              :class="{_active_language: language === 'EN'}"
          >
            EN
          </a>
        </div>
      </div>
      <div class="welcome__photo">
        <picture>
          <source srcset="@/assets/img/welcome/welcomebw.webp" type="image/webp">
          <img src="@/assets/img/welcome/welcomebw.jpg" alt="welcome photo"/></picture>
      </div>
      <div class="_tip">
        <span v-html="localization['tip']"></span>
        <img src="@/assets/img/arrow.png" alt="arrow">

      </div>
      <div @click="openBurger" class="header__burger" :class="{_active: burgerActive}">
        <span></span>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  props: ['burgerActive', 'language', 'localization'],
  methods: {
    openBurger() {
      this.$emit('openBurger')
    },
    changeLang(element) {
      this.$emit('changeLang', element.target.innerHTML.trim())
    },
  }
}
</script>

<style scoped>
._tip {
  position: absolute;
  left: 10px;
  bottom: 30px;
  transform: rotate(10deg);
}

._tip span {
  width: 130px;
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

.page__welcome {
  margin-top: 123px;
}

.welcome {
}

.welcome__container {
  position: relative;
  padding-bottom: 100px;
}

.welcome__header {
  margin-bottom: 30px;
}

.header-welcome {
  display: flex;
  flex-wrap: wrap;
}

.header-welcome__block {
  flex: 1 1 30%;
}

.welcome-name {
  font-size: 45px;
  font-weight: 700;
  line-height: calc(58 / 48 * 100%);
  display: flex;
  align-items: flex-end;

}

.welcome-name span {
  color: #9d9d9d
}

@media (max-width: 650px) {
  .welcome-name {
    font-size: 35px;
  }
}

.welcome-about {
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  padding-bottom: 7px;
}

@media (max-width: 530px) {
  .header__burger {
    z-index: 10;
    display: block;
    position: absolute;
    top: 20px;
    right: 30px;
    width: 30px;
    height: 18px;
    cursor: pointer;
  }

  .header__burger span,
  .header__burger::before,
  .header__burger::after {
    left: 0;
    position: absolute;
    height: 10%;
    width: 100%;
    transition: all 0.3s ease 0s;
    background-color: #9d9d9d;
  }

  .header__burger::before,
  .header__burger::after {
    content: "";
  }

  .header__burger::before {
    top: 0;
  }

  .header__burger::after {
    bottom: 0;
  }

  .header__burger span {
    top: 50%;
    transform: scale(1) translate(0, -50%);
  }

  .header__burger._active::before {
    top: 50%;
    transform: rotate(-45deg) translate(0, -50%);
  }

  .header__burger._active::after {
    bottom: 50%;
    transform: rotate(45deg) translate(0, 50%);
  }

  .header__burger._active span {
    scale: 0;
  }

}

.welcome-language {
  font-size: 16px;
  font-weight: 500;
  text-align: end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding-bottom: 12px;
  color: #6e6e6e;
}


.welcome-language > * {
  writing-mode: vertical-lr;
}

.welcome-language > *:not(:last-child) {
  margin-bottom: 3px;
}

._active_language {
  pointer-events: none;
  color: #e1e1e1;
}


.welcome-language__separator {
  cursor: default;
  pointer-events: none;
  color: #5d5c5c;
}


.welcome__photo {
  height: 387px;
}

.welcome__photo picture img {
  border-radius: 40px;
  opacity: 0.5;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}


@media (max-width: 800px) {
  .header-welcome__block {
    flex: 0 1 50%;
  }

  .welcome-name {
    order: 0;
  }

  .welcome-language {
    order: 1;
  }

  .welcome-about {
    margin-top: 20px;
    justify-content: start;
    text-align: left;
    order: 2;
  }

  .welcome__header {
    margin-bottom: 30px;
  }


}

@media (max-width: 530px) {
  .header-welcome {
    flex-direction: column;
  }

  .welcome {
    margin-top: 60px;
  }


  .welcome-language {
    top: 145px;
    right: 33px;
    flex-direction: row;
    position: absolute;
    font-size: 20px;
  }

  .welcome-language > *:not(:last-child) {
    margin-bottom: 0;
    margin-right: 5px;
  }

  .welcome-language > * {
    writing-mode: unset;
  }

  .welcome__photo {
    max-height: 478px;
  }
}

@media (max-width: 650px) {
  .welcome-name {
    font-size: 35px;
  }
}
</style>