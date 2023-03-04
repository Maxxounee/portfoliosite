<!--<template>-->
<!--  <section class="page__skills skills">-->
<!--    <div class="skills__container _container">-->
<!--      <div class="skills__header">-->
<!--        <h1 class="skills__title title-block"><span v-html="localization['title']"></span></h1>-->
<!--        <div class="skills__text text-block"><span v-html="localization['text']"></span></div>-->
<!--      </div>-->
<!--      <div class="skills__technologies technologies">-->
<!--        <div class="technologies__block technologies__block_frontend">-->
<!--          <div class="technologies__title"><span v-html="localization['frontend']"></span></div>-->
<!--          <div class="technologies__wrapper technologies__wrapper_frontend">-->
<!--            <div class="technologies__logo logo">-->
<!--              <div class="logo__image _clickable">-->
<!--                <img-->
<!--                    id="html"-->
<!--                    @touchend="infoOpen"-->
<!--                    @click="infoOpen"-->
<!--                    src="@/assets/img/skills/frontend/frontend_html.png"-->
<!--                    alt="html image"-->
<!--                />-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="technologies__logo logo">-->
<!--              <div class="logo__image _clickable">-->
<!--                <img-->
<!--                    id="js"-->
<!--                    @click="infoOpen"-->
<!--                    @touchend="infoOpen"-->
<!--                    src="@/assets/img/skills/frontend/frontend_js.png"-->
<!--                    alt="js image"-->
<!--                />-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="technologies__logo logo">-->
<!--              <div class="logo__image _clickable">-->
<!--                <img-->
<!--                    id="sass"-->
<!--                    @click="infoOpen"-->
<!--                    @touchend="infoOpen"-->
<!--                    src="@/assets/img/skills/frontend/frontend_sass.png"-->
<!--                    alt="sass image"-->
<!--                />-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="technologies__logo logo">-->
<!--              <div class="logo__image _clickable">-->
<!--                <img-->
<!--                    id="gulp"-->
<!--                    @click="infoOpen"-->
<!--                    @touchend="infoOpen"-->
<!--                    src="@/assets/img/skills/frontend/frontend_gulp.png"-->
<!--                    alt="gulp image"-->
<!--                />-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="technologies__logo logo">-->
<!--              <div class="logo__image _clickable">-->
<!--                <img-->
<!--                    id="vue"-->
<!--                    @click="infoOpen"-->
<!--                    @touchend="infoOpen"-->
<!--                    src="@/assets/img/skills/frontend/frontend_vue.png"-->
<!--                    alt="vue image"-->
<!--                />-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="technologies__info technologies__info_frontend info">-->
<!--            <div class="info__block info__block_frontend">-->
<!--              <div class="info__text">-->
<!--                Подробная информация о технологии-->
<!--              </div>-->
<!--              <span-->
<!--                  @touchend="removeInfo"-->
<!--                  @click="removeInfo"-->
<!--                  class="info__close-button"></span>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        &lt;!&ndash;        Backend&ndash;&gt;-->
<!--        <div class="technologies__block technologies__block_backend">-->
<!--          <div class="technologies__title"><span v-html="localization['backend']"></span></div>-->
<!--          <div class="technologies__wrapper technologies__wrapper_backend">-->
<!--            <div class="technologies__logo logo">-->
<!--              <div class="logo__image _clickable">-->
<!--                <img-->
<!--                    id="node"-->
<!--                    @click="infoOpen"-->
<!--                    @touchend="infoOpen"-->
<!--                    src="@/assets/img/skills/backend/backend_node.png"-->
<!--                    alt="nodejs image"-->
<!--                />-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="technologies__logo logo">-->
<!--              <div class="logo__image _clickable">-->
<!--                <img-->
<!--                    id="mysql"-->
<!--                    @click="infoOpen"-->
<!--                    @touchend="infoOpen"-->
<!--                    src="@/assets/img/skills/backend/backend_mysql.png"-->
<!--                    alt="mysql image"-->
<!--                />-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="technologies__logo logo">-->
<!--              <div class="logo__image _clickable">-->
<!--                <img-->
<!--                    id="mongo"-->
<!--                    @click="infoOpen"-->
<!--                    @touchend="infoOpen"-->
<!--                    src="@/assets/img/skills/backend/backend_mongo.png"-->
<!--                    alt="mongodb image"-->
<!--                />-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="technologies__logo logo">-->
<!--              <div class="logo__image _clickable">-->
<!--                <img-->
<!--                    id="python"-->
<!--                    @click="infoOpen"-->
<!--                    @touchend="infoOpen"-->
<!--                    src="@/assets/img/skills/backend/backend_py.png"-->
<!--                    alt="python image"-->
<!--                />-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="technologies__logo logo">-->
<!--              <div class="logo__image _clickable">-->
<!--                <img-->
<!--                    id="django"-->
<!--                    @click="infoOpen"-->
<!--                    @touchend="infoOpen"-->
<!--                    src="@/assets/img/skills/backend/backend_dj.png"-->
<!--                    alt="django image"-->
<!--                />-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="technologies__info technologies__info_backend info">-->
<!--            <div class="info__block info__block_backend">-->
<!--              <div class="info__text">-->
<!--                Подробная информация о технологии-->
<!--              </div>-->
<!--              <span-->
<!--                  @touchend="removeInfo"-->
<!--                  @click="removeInfo"-->
<!--                  class="info__close-button"></span>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        &lt;!&ndash;other&ndash;&gt;-->
<!--        <div class="technologies__block technologies__block_other">-->
<!--          <div class="technologies__title"><span v-html="localization['other']"></span></div>-->
<!--          <div class="technologies__wrapper technologies__wrapper_other">-->
<!--            <div class="technologies__logo logo">-->
<!--              <div class="logo__image _clickable">-->
<!--                <img-->
<!--                    id="console"-->
<!--                    @click="infoOpen"-->
<!--                    @touchend="infoOpen"-->
<!--                    src="@/assets/img/skills/other/other_console.png"-->
<!--                    alt="console image"-->
<!--                />-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="technologies__logo logo">-->
<!--              <div class="logo__image _clickable">-->
<!--                <img-->
<!--                    id="git"-->
<!--                    @click="infoOpen"-->
<!--                    @touchend="infoOpen"-->
<!--                    src="@/assets/img/skills/other/other_git.png"-->
<!--                    alt="Github image"-->
<!--                />-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="technologies__logo logo">-->
<!--              <div class="logo__image _clickable">-->
<!--                <img-->
<!--                    id="figma"-->
<!--                    @click="infoOpen"-->
<!--                    @touchend="infoOpen"-->
<!--                    src="@/assets/img/skills/other/other_figma.png"-->
<!--                    alt="figma image"-->
<!--                />-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="technologies__logo logo">-->
<!--              <div class="logo__image _clickable">-->
<!--                <img-->
<!--                    id="language"-->
<!--                    @click="infoOpen"-->
<!--                    @touchend="infoOpen"-->
<!--                    src="@/assets/img/skills/other/other_lang.png"-->
<!--                    alt="language image"-->
<!--                />-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="technologies__info technologies__info_other info">-->
<!--            <div class="info__block info__block_other">-->
<!--              <div class="info__text">-->
<!--                Подробная информация о технологии-->
<!--              </div>-->
<!--              <span-->
<!--                  @touchend="removeInfo"-->
<!--                  @click="removeInfo"-->
<!--                  class="info__close-button"></span>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->
<!--</template>-->

<script>


const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
    );
  },
};
export default {
  props: ['language', 'infoLocalize', 'localization'],
  mounted() {
    document.querySelectorAll('.info__close-button').forEach((button) => {
      if (isMobile.any()) {
        button.classList.add('_active')
      }
    })
    document.addEventListener('scroll', this.removeInfo)
    document.querySelectorAll('.technologies__info').forEach((block) => {
      return block.addEventListener('mouseout', this.removeInfo)
    })
  },
  methods: {
    removeInfo() {
      document.querySelectorAll('.technologies__info').forEach((block) => {
        block.classList.remove('_active__info')
      })
    },
    infoOpen(e) {
      this.removeInfo()
      let infoBlock = e.target.offsetParent.offsetParent.children[2]
      infoBlock.classList.add('_active__info')
      infoBlock.children[0].children[0].innerHTML = this.infoLocalize[`${this.language}`][`${e.target.id}`]
    },

  }


}
</script>

<style scoped>


.page__skills {
  margin-bottom: 110px;
}

.skills {
}

.skills__container {
  padding-top: 90px;

}

.skills__header {

  position: relative;
  box-sizing: content-box;
  z-index: 1;
  background-color: #fff;

  padding-bottom: 100px;
}

@media (max-width: 800px) {
  .skills__header {

    padding-bottom: 80px;
  }
}

.skills__title {
  margin-bottom: 70px;
}

.skills__text {
}

.skills__technologies {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.technologies__block {
  width: 100%;

  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.technologies__block:first-child {
  margin-left: 0;
}

.technologies__block:last-child {
  margin-right: 0;
}


.technologies__title {
  margin: 10px 0;
  text-align: center;
}

.technologies__wrapper {
  max-height: 140px;
}

.technologies__wrapper_frontend,
.technologies__wrapper_backend,
.technologies__wrapper_other {
  max-width: 250px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.technologies__block_frontend {
}

.technologies__logo {
  margin: 0 auto;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  justify-content: center;
}

img {
  max-width: 50px;
}

img:hover {
  max-width: 52px;
}

img:active {
  max-width: 48px;
}

img._active {
  max-width: 55px;
  filter: drop-shadow(1px 2px 4px rgba(0, 0, 0, 0.1));
}


._clickable,
._clickable img {
  transition: all 0.1s ease 0s;
  filter: drop-shadow(1px 2px 4px rgba(0, 0, 0, 0.1));
}

._clickable:hover,
._clickable:hover img {
  cursor: pointer;
  filter: drop-shadow(2px 3px 7px rgba(0, 0, 0, 0.1));
}

._clickable:active,
._clickable:active img {
  filter: drop-shadow(1px 2px 4px rgba(0, 0, 0, 0.1));
}

.technologies__block_backend {
}

.technologies__block_other {
}

@media (max-width: 800px) {
  .skills__title {
    margin-bottom: 50px;
  }

  .skills__technologies {
  }
}

@media (max-width: 750px) {
  .skills__technologies {
    flex-direction: column;
  }

  .technologies__block {
    margin: 0;
    border-top: none;
  }

  .technologies__block:first-child {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .technologies__block:last-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
}


.technologies__info {
  position: absolute;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  top: -100%;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.68);
  backdrop-filter: blur(4px);
  transition: all 1s ease 0s;
  opacity: 0%;
}

.technologies__info._active__info {
  top: 0;
  opacity: 100%;
  transition: all 0.4s ease 0s;
}

.info__block {
  text-align: center;
  width: 100%;
  height: 100%;
}

.info__text {
  /*padding: 40px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 17%;
  font-weight: 300;
  width: 100%;
  height: 100%;
}

.info__close-button {
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  opacity: 0.8;
  border: solid black;
  border-width: 0 2px 2px 0;
  padding: 4px;
  transform: rotate(225deg);
  cursor: pointer;
}

.info__close-button._active {
  display: block;
}

@media (max-width: 750px) {
  .technologies__info {
    border-left: none;
    border-right: none;
    top: 0;
    left: -100%;
  }

  .technologies__info._active__info {
    left: 0;
  }

  .info__close-button {
    transform: rotate(135deg);
  }
}
</style>