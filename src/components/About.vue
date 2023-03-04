<template>
  <section class="page__about about _page-section_2">
    <div class="about__container _container">
      <div class="about__block">
        <h1 class="about__title title-block"><span v-html="localization['title']"></span></h1>
        <div class="about__text-block">
          <div class="about__text text-block">
            <span v-html="localization['text1']"></span>
          </div>
          <div class="about__text text-block">
            <span v-html="localization['text2']"></span>
          </div>
          <div class="about__text text-block">
            <span v-html="localization['text3']"></span>
          </div>
        </div>

      </div>
      <div class="_tip">
        <img src="@/assets/img/arrow.png" alt="arrow">
        <span v-html="localization['tip']"></span>

      </div>
      <div class="_background-opacity">
        <div class="about__background" :style="backgroundOffset">
          <div class="about__invaders" v-for="i in 72">
            <img @click="replace"
                 :key="i"
                 :src="invaderImage"
                 class="_invader"
                 alt="invader">
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>


export default {
  props: ['localization'],
  mounted() {
    window.addEventListener('scroll', this.backgroundScroll)

  },
  data() {
    return {
      invaderImage: require(`@/assets/img/about/invader.svg`),
      explosionImage: require(`@/assets/img/about/explosion.gif`),
      backgroundOffset: `left: 10%`
    }
  },
  methods: {
    replace(event) {
      event.target.src = this.explosionImage
      event.srcElement.classList.add('_hide')
    },
    backgroundScroll() {
      let pageOffset = window.scrollY / 30
      this.backgroundOffset = `transform:
      translate(${pageOffset - 30}%, 0)
      rotate(${pageOffset - 20}deg)
      scale(${pageOffset / 10})`
    }
  },

}
</script>

<style scoped>
._tip {
  position: absolute;
  right: 150px;
  bottom: -10px;
  transform: rotate(-10deg);
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
  transform: scale(-1, 1) rotate(90deg) translate(-5px, 15px);
  filter: invert() opacity(0.3);
}

._invader {
  width: 30px;
  height: 30px;
  opacity: 0.3;
  transition: opacity 1s ease;
  cursor: pointer;
  filter: invert();
}

._hide {
  filter: none;
  opacity: 0;
  cursor: default !important;
}

.about__invaders {
  display: flex;
  justify-content: center;
  align-items: center;

}

._background-opacity {
  mask-image: radial-gradient(circle, transparent 20%, #000 50%);
  width: 150%;
  height: 100%;
  position: absolute;
  top: 0;
  left: -25%;
}

.about__background {
  overflow: hidden;
  z-index: 0;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto;
  grid-template-rows: auto auto auto auto auto auto;
  top: 0;
  left: 10%;
  position: absolute;
  width: 100%;
  height: 100%;
  transition-timing-function: cubic-bezier(0, 0, 0.4, 1);
  transition-duration: 1s;
  transform: rotate(5deg);
}

.about__background:before {
}

.page__about {
}

.about__container {
  position: relative;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.text-block {
}

.about__text span {
  position: center;
  font-size: 18px;
  color: #9d9d9d;
}

.about__block {
  padding: 70px 15px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-radius: 40px;
  background-size: 200px 200px;
}

.about__title {
  padding-bottom: 35px;
}


.about__text-block {
}

.text-block:not(:last-child) {
  margin-bottom: 35px;
}

@media (max-width: 500px) {
  .text-block:not(:last-child) {
    margin-bottom: 15px;
  }

  .text-block span {
    font-size: 14px;
  }

  .about__block {
    padding: 40px 15px;
  }
}

</style>