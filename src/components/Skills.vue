<template>
  <section class="page__skills skills">
    <div class="skills__container _container">
      <div class="skills__header">
        <h1 class="skills__title title-block"><span v-html="localization['title']"></span></h1>
        <div class="skills__text text-block"><span v-html="localization['text1']"></span></div>
        <div class="skills__text text-block"><span v-html="localization['text2']"></span></div>
        <div class="skills__text text-block"><span v-html="localization['text3']"></span></div>
      </div>
    </div>
    <div
        class="skills__background-wrapper _container">
      <!--      1 row-->
      <div :style="depth_minus_2" class="skills__floating-item depth-minus-2">
        <div class="skills__floating-image">
        </div>
      </div>
      <div :style="depth_minus_1" class="skills__floating-item depth-minus-1">
        <div class="skills__floating-border">
        </div>
      </div>
      <div :style="depth_0" class="skills__floating-item depth-0">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/backend_dj.png" alt="">
        </div>
      </div>
      <div :style="depth_minus_2" class="skills__floating-item depth-minus-2">
        <div class="skills__floating-image">

        </div>
      </div>
      <div :style="depth_minus_1" class="skills__floating-item depth-minus-1">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/backend_mysql.png" alt="">
        </div>
      </div>
      <div :style="depth_0" class="skills__floating-item depth-0">
        <div class="skills__floating-border">

        </div>
      </div>
      <div :style="depth_minus_2" class="skills__floating-item depth-minus-2">
        <div class="skills__floating-image">
        </div>
      </div>
      <div :style="depth_0" class="skills__floating-item depth-0">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/backend_mongo.png" alt="">
        </div>
      </div>
      <div :style="depth_minus_1" class="skills__floating-item depth-minus-1">
        <div class="skills__floating-image">
        </div>
      </div>
      <!--      2 row-->
      <div :style="depth_minus_1" class="skills__floating-item depth-minus-1">
        <div class="skills__floating-image">
        </div>
      </div>
      <div :style="depth_plus_1" class="skills__floating-item depth-plus-1">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/backend_node.png" alt="">
        </div>
      </div>
      <div :style="depth_0" class="skills__floating-item depth-0">
        <div class="skills__floating-image">
        </div>
      </div>
      <div :style="depth_minus_1" class="skills__floating-item depth-minus-1">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/backend_py.png" alt="">
        </div>
      </div>
      <div :style="depth_0" class="skills__floating-item depth-0">
        <div class="skills__floating-image">
        </div>
      </div>
      <div :style="depth_plus_1" class="skills__floating-item depth-plus-1">
        <div class="skills__floating-image">
        </div>
      </div>
      <div :style="depth_0" class="skills__floating-item depth-0">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/frontend_css.png" alt="">
        </div>
      </div>
      <div :style="depth_minus_2" class="skills__floating-item depth-minus-2">
        <div class="skills__floating-image">
        </div>
      </div>
      <div :style="depth_0" class="skills__floating-item depth-0">
        <div class="skills__floating-border">
        </div>
      </div>
      <!--      3 row-->
      <div :style="depth_minus_1" class="skills__floating-item depth-minus-1">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/frontend_gulp.png" alt="">
        </div>
      </div>
      <div :style="depth_0" class="skills__floating-item depth-0">
        <div class="skills__floating-image">
        </div>
      </div>
      <div :style="depth_plus_1" class="skills__floating-item depth-plus-1">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/frontend_html.png" alt="">
        </div>
      </div>
      <div :style="depth_minus_2" class="skills__floating-item depth-minus-2">
        <div class="skills__floating-border">
        </div>
      </div>
      <div :style="depth_plus_1" class="skills__floating-item depth-plus-1">
        <div class="skills__floating-image">
        </div>
      </div>
      <div :style="depth_0" class="skills__floating-item depth-0">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/frontend_js.png" alt="">
        </div>
      </div>
      <div :style="depth_plus_1" class="skills__floating-item depth-plus-1">
        <div class="skills__floating-border">
        </div>
      </div>
      <div :style="depth_minus_1" class="skills__floating-item depth-minus-1">
        <div class="skills__floating-image">
        </div>
      </div>
      <div :style="depth_0" class="skills__floating-item depth-0">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/frontend_sass.png" alt="">
        </div>
      </div>
      <!--      4 row-->
      <div :style="depth_minus_2" class="skills__floating-item depth-minus-2">
        <div class="skills__floating-border">
        </div>
      </div>
      <div :style="depth_0" class="skills__floating-item depth-0">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/other_console.png" alt="">
        </div>
      </div>
      <div :style="depth_minus_2" class="skills__floating-item depth-minus-2">
        <div class="skills__floating-image">
        </div>
      </div>
      <div :style="depth_0" class="skills__floating-item depth-0">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/other_figma.png" alt="">
        </div>
      </div>
      <div :style="depth_minus_1" class="skills__floating-item depth-minus-1">
        <div class="skills__floating-image">
        </div>
      </div>
      <div :style="depth_minus_2" class="skills__floating-item depth-minus-2">
        <div class="skills__floating-image">
        </div>
      </div>
      <div :style="depth_plus_1" class="skills__floating-item depth-plus-1">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/other_git.png" alt="">
        </div>
      </div>
      <div :style="depth_0" class="skills__floating-item depth-0">
        <div class="skills__floating-border">
        </div>
      </div>
      <div :style="depth_minus_1" class="skills__floating-item depth-minus-1">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/other_lang.png" alt="">
        </div>
      </div>
    </div>

  </section>
</template>

<script>


export default {
  props: {
    language: "language",
    localization: "localization",
  },
  data() {
    return {
      depth_minus_2: 'transform: translate3d(0, 0, -10rem)',
      depth_minus_1: 'transform: translate3d(0, 0, -7rem)',
      depth_0: 'transform: translate3d(0, 0, -3rem);',
      depth_plus_1: 'transform: translate3d(0, 0, 3rem)'
    }
  },
  methods: {
    seeker(e) {
      let cordX = e.clientX - window.innerWidth / 2
      let cordY = e.clientY - window.innerHeight / 2
      this.depth_minus_2 = `transform: translate3d(${cordX / 150}rem, ${cordY / 150}rem, -10rem )`
      this.depth_minus_1 = `transform: translate3d(${cordX / 130}rem, ${cordY / 130}rem, -7rem )`
      this.depth_0 = `transform: translate3d(${cordX / 115}rem, ${cordY / 115}rem, -3rem )`
      this.depth_plus_1 = `transform: translate3d(${cordX / 100}rem, ${cordY / 100}rem, 3rem )`
    },

  }
}
</script>

<style scoped>


.page__skills {
  position: relative;
  height: auto;
}

.skills {
}

.skills__container {
  position: relative;
  z-index: 1;
  padding-top: 50px;
  padding-bottom: 50px;
}

.skills__header {

  position: relative;
  box-sizing: content-box;

}

@media (max-width: 700px) {
  .text-block {
    margin-bottom: 15px;
  }

  .text-block span {
    font-size: 14px;
  }

}

/*@media (max-width: 800px) {*/
/*  .skills__header {*/
/*    padding-bottom: 80px;*/
/*  }*/
/*}*/

.skills__title {
  margin-bottom: 35px;
}

.skills__text {
  margin-bottom: 20px;
}

.skills__text span {
  color: #9d9d9d
}

.skills__background-wrapper {
  position: absolute;
  z-index: 3;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto;
  grid-template-rows: auto;
  justify-items: center;
  perspective: 350px;
  perspective-origin: 50% 50%;
}

.depth-minus-2,
.depth-minus-1,
.depth-0,
.depth-plus-1 {
  transition-timing-function: cubic-bezier(0, 0, 0.4, 1);
  transition-duration: 2s;
}


.depth-minus-1 {
  transform: translate3d(0, 0, -7rem);
}

.depth-0 {
  transform: translate3d(0, 0, -3rem);
}

.depth-plus-1 {
  transform: translate3d(0, 0, 3rem);
}

.skills__floating-item {
  transform-style: preserve-3d;
  width: 60px;
  height: 60px;
  border-radius: 20px;
}

.skills__floating-item:hover {
  scale: 1.5;
  background-color: rgba(77, 77, 77, 0.3);
}

.skills__floating-image {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: rgba(77, 77, 77, 0.2);
}

.skills__floating-border {
  height: 100%;
  border-radius: 20px;
  border: 2px solid rgba(77, 77, 77, 0.2);
}

.skills__floating-image img {
  width: 30px;
  height: 30px;
  filter: grayscale(0.6) opacity(0.6);
  mix-blend-mode: multiply;
}


@media (max-width: 650px) {
  .skills__container {
    margin-top: 0;
  }

  .skills__floating-image img {
    width: 20px;
    height: 20px;
    border-radius: 15px;
  }

  .skills__floating-image {
    border-radius: 15px;
  }

  .skills__floating-border {
    border-radius: 15px;
  }

  .skills__floating-item {
    transform-style: preserve-3d;
    width: 45px;
    height: 45px;
  }
}

@media (max-width: 480px) {
  .skills__floating-image img {
    width: 15px;
    height: 15px;
    border-radius: 10px;
  }

  .skills__floating-image {
    border-radius: 10px;
  }

  .skills__floating-border {
    border-radius: 10px;
  }

  .skills__floating-item {
    border-radius: 10px;
    width: 30px;
    height: 30px;
  }
}
</style>