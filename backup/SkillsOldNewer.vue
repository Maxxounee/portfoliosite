<template>
  <section class="page__skills skills">
    <div class="skills__container _container">
      <div class="skills__header">
        <h1 class="skills__title title-block"><span v-html="localization['title']"></span></h1>
        <div class="skills__text text-block"><span v-html="localization['text']"></span></div>
      </div>
    </div>
    <div
        @mousemove="seeker"
        class="skills__background-wrapper _container">
      <!--      1 row-->
      <div class="skills__floating-item depth-minus-2">
        <div class="skills__floating-image">
        </div>
      </div>
      <div class="skills__floating-item depth-minus-1">
        <div class="skills__floating-border">
          <!--          <img src="@/assets/img/skills/backend/backend_py.png" alt="">-->
        </div>
      </div>
      <div class="skills__floating-item depth-0">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/backend_dj.png" alt="">
        </div>
      </div>
      <div class="skills__floating-item depth-minus-2">
        <div class="skills__floating-image">

        </div>
      </div>
      <div class="skills__floating-item depth-minus-1">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/backend_mysql.png" alt="">
        </div>
      </div>
      <div class="skills__floating-item depth-0">
        <div class="skills__floating-border">

        </div>
      </div>
      <div class="skills__floating-item depth-minus-2">
        <div class="skills__floating-image">
        </div>
      </div>
      <div class="skills__floating-item depth-0">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/backend_mongo.png" alt="">
        </div>
      </div>
      <div class="skills__floating-item depth-minus-1">
        <div class="skills__floating-image">
        </div>
      </div>
      <!--      2 row-->
      <div class="skills__floating-item depth-minus-1">
        <div class="skills__floating-image">
        </div>
      </div>
      <div class="skills__floating-item depth-plus-1">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/backend_node.png" alt="">
        </div>
      </div>
      <div class="skills__floating-item depth-0">
        <div class="skills__floating-image">
        </div>
      </div>
      <div class="skills__floating-item depth-minus-1">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/backend_py.png" alt="">
        </div>
      </div>
      <div class="skills__floating-item depth-0">
        <div class="skills__floating-image">
        </div>
      </div>
      <div class="skills__floating-item depth-plus-1">
        <div class="skills__floating-image">
        </div>
      </div>
      <div class="skills__floating-item depth-0">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/frontend_css.png" alt="">
        </div>
      </div>
      <div class="skills__floating-item depth-minus-2">
        <div class="skills__floating-image">
        </div>
      </div>
      <div class="skills__floating-item depth-0">
        <div class="skills__floating-border">
        </div>
      </div>
      <!--      3 row-->
      <div class="skills__floating-item depth-minus-1">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/frontend_gulp.png" alt="">
        </div>
      </div>
      <div class="skills__floating-item depth-0">
        <div class="skills__floating-image">
        </div>
      </div>
      <div class="skills__floating-item depth-plus-1">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/frontend_html.png" alt="">
        </div>
      </div>
      <div class="skills__floating-item depth-minus-2">
        <div class="skills__floating-border">
        </div>
      </div>
      <div class="skills__floating-item depth-plus-1">
        <div class="skills__floating-image">
        </div>
      </div>
      <div class="skills__floating-item depth-0">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/frontend_js.png" alt="">
        </div>
      </div>
      <div class="skills__floating-item depth-plus-1">
        <div class="skills__floating-border">
        </div>
      </div>
      <div class="skills__floating-item depth-minus-1">
        <div class="skills__floating-image">
        </div>
      </div>
      <div class="skills__floating-item depth-0">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/frontend_sass.png" alt="">
        </div>
      </div>
      <!--      4 row-->
      <div class="skills__floating-item depth-minus-2">
        <div class="skills__floating-border">
        </div>
      </div>
      <div class="skills__floating-item depth-0">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/other_console.png" alt="">
        </div>
      </div>
      <div class="skills__floating-item depth-minus-2">
        <div class="skills__floating-image">
        </div>
      </div>
      <div class="skills__floating-item depth-0">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/other_figma.png" alt="">
        </div>
      </div>
      <div class="skills__floating-item depth-minus-1">
        <div class="skills__floating-image">
        </div>
      </div>
      <div class="skills__floating-item depth-minus-2">
        <div class="skills__floating-image">
        </div>
      </div>
      <div class="skills__floating-item depth-plus-1">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/other_git.png" alt="">
        </div>
      </div>
      <div class="skills__floating-item depth-0">
        <div class="skills__floating-border">
        </div>
      </div>
      <div class="skills__floating-item depth-minus-1">
        <div class="skills__floating-image">
          <img src="@/assets/img/skills/other_lang.png" alt="">
        </div>
      </div>
    </div>

  </section>
</template>

<script>
function ready() {
  const minus2 = document.querySelectorAll('.depth-minus-2')
  const minus1 = document.querySelectorAll('.depth-minus-1')
  const zero = document.querySelectorAll('.depth-0')
  const plus1 = document.querySelectorAll('.depth-plus-1')
  // document.onmousemove = function (event) {
  //   let x = event.x - window.innerWidth / 2
  //   let y = event.y - window.innerHeight / 2
  //
  //   minus2.forEach(elem => {
  //     elem.style.transform = `translate3d(${x / 150}rem, ${y / 150}rem, -10rem )`
  //   })
  //   minus1.forEach(elem => {
  //     elem.style.transform = `translate3d(${x / 130}rem, ${y / 130}rem, -7rem )`
  //   })
  //   zero.forEach(elem => {
  //     elem.style.transform = `translate3d(${x / 115}rem, ${y / 115}rem, -3rem )`
  //   })
  //   plus1.forEach(elem => {
  //     elem.style.transform = `translate3d(${x / 100}rem, ${y / 100}rem, 3rem )`
  //   })
  //
  //
  // }

}

document.addEventListener("DOMContentLoaded", ready)


export default {
  props: ['language', 'localization',],

  methods: {
    seeker(e) {
      console.log(e.clientX)

    }
  }
}
</script>

<style scoped>


.page__skills {
  position: relative;
  height: 350px;
}

.skills {
}

.skills__container {
  margin-top: 50px;
  padding-top: 100px;

}

.skills__header {

  position: relative;
  box-sizing: content-box;

}

@media (max-width: 800px) {
  .skills__header {
    padding-bottom: 80px;
  }
}

.skills__title {
  margin-bottom: 70px;
}

.skills__text span {
  color: #9d9d9d
}

.skills__background-wrapper {
  position: absolute;
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

.depth-minus-2 {
  transform: translate3d(0, 0, -10rem);
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