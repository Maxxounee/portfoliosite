<template>
  <Header
      :class="{_headerhide: headerHide, _active: headerActive}"
      :style="{top: `${headerOffset}px`}"
      :localization="localization[this.language]['header']"
      @scrollToHome="scrollToHome"
      @scrollToAbout="scrollToAbout"
      @scrollToSkills="scrollToSkills"
      @scrollToPortfolio="scrollToPortfolio"
      @scrollToContacts="scrollToContacts"
  >
  </Header>
  <div class="page" :onmousemove="skillsAnimation">
    <Welcome
        @openBurger="openBurger"
        @changeLang="changeLang"
        :burgerActive='headerActive'
        :language="language"
        :localization="localization[this.language]['welcome']"
    >
    </Welcome>
    <About
        id="about"
        :localization="localization[this.language]['about']"
    >
    </About>

    <Portfolio
        id="portfolio"
        :localization="localization[this.language]['portfolio']"
    >
    </Portfolio>
    <Skills
        ref="skills"
        id="skills"
        :language="language"
        :infoLocalize="infoLocalize"
        :localization="localization[this.language]['skills']"
    >
    </Skills>
    <Contacts
        @toggleModal="toggleModal"
        :localization="localization[this.language]['contacts']"
        id="contacts"
    >
    </Contacts>
  </div>
  <SendMessage
      @clearModal="clearModal"
      @sendMessage="sendMessage"
      @toggleModal="toggleModal"
      :class="{_active_modal: sendModalOpen}"
      :message="message"
      :localization="localization['modal']"
  ></SendMessage>
  <Success
      :class="{_active_success: activeSuccess}"
      :localization="localization['modal']"
  ></Success>
</template>

<script>


import Header from "@/components/Header.vue";
import Welcome from "@/components/Welcome.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Portfolio from "@/components/Portfolio.vue";
import Contacts from "@/components/Contacts.vue";
import infoLocalize from "@/localization/infoblock.json";
import localization from "@/localization/localization.json";
import SendMessage from "@/components/modals/SendMessage.vue";
import Success from "@/components/modals/Success.vue";

export default {
  name: 'App',
  components: {
    Success,
    SendMessage,
    Contacts,
    Portfolio,
    Skills,
    About,
    Welcome,
    Header
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.onScroll)
    if (window.innerWidth > 530) {
      this.headerOffset = 0
    }
  },
  data() {
    return {
      language: this.$cookies.get('language') ? this.$cookies.get('language') : "EN",
      headerActive: false,
      headerDisplay: 'none',
      headerHide: false,
      headerOffset: -200,
      infoLocalize: infoLocalize,
      localization: localization,
      sendModalOpen: false,
      activeSuccess: false,
      message: {
        name: '',
        contact: '',
        text: ''
      }
    }
  },
  methods: {
    skillsAnimation(e) {
      this.mousePositionX = e.clientX - window.innerWidth / 2
      this.mousePositionY = e.clientY - window.innerHeight / 2
      this.$refs.skills.seeker(e)
    },
    changeLang(language) {
      this.language = language
      document.cookie = `language=${language}`
    },
    getUnlock() {
      if (this.headerActive) {
        this.headerActive = false
        document.body.classList.remove('_lock')
      }
    },
    openBurger() {
      this.headerActive = !this.headerActive
      this.headerActive ? document.body.classList.add('_lock') : document.body.classList.remove('_lock')
    },
    onScroll() {
      if (window.innerWidth < 530) {
        this.headerHide = true
        this.headerOffset = -200
      }
      if (window.scrollY > 88) {
        this.headerHide = true
        this.headerOffset = scrollY < 144 ? window.scrollY - 183 : -40
      } else if (window.innerWidth > 530) {
        this.headerHide = false
        this.headerOffset = 0
      }
    },
    scrollToHome() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      this.getUnlock()
    },
    scrollToAbout() {
      this.getUnlock()
      document.getElementById('about').scrollIntoView({behavior: "smooth", block: "center"})
    },
    scrollToSkills() {
      this.getUnlock()
      document.getElementById('skills').scrollIntoView({behavior: "smooth", block: "center"})
    },
    scrollToPortfolio() {
      this.getUnlock()
      document.getElementById('portfolio').scrollIntoView({behavior: "smooth", block: "center"})
    },
    scrollToContacts() {
      this.getUnlock()
      document.getElementById('contacts').scrollIntoView({behavior: "smooth"})
    },
    clearModal() {
      this.message.text = this.message.name = this.message.contact = ''
    },
    toggleModal() {
      this.sendModalOpen = !this.sendModalOpen
      this.sendModalOpen ? document.body.classList.add('_lock') : document.body.classList.remove('_lock')
    },
    sendMessage() {
      if (this.message.name && this.message.contact && this.message.text) {
        const newMessage = JSON.stringify(this.message)
        fetch("api/telegram", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: newMessage
        }).then(() => {
          this.clearModal()
          this.toggleModal()
          setTimeout(() => this.activeSuccess = false, 2700)
        }).catch((error) => {
          console.log('Error:', error)
        })
      }
    }
  }

}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  border: 0;
  color: #e1e1e1;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a:focus,
a:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  background-color: #16171b;
  background-image: url("@/assets/img/noise.png");
  background-size: 200px 200px;
  /*mix-blend-mode: soft-light;*/
  /*opacity: 0.5;*/
  height: 100%;
  width: 100%;
  line-height: 1;
}

input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 10px;
  border: 0;
}

a,
a:visited {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}

@font-face {
  font-family: Roboto;
  font-display: swap;
  src: url("@/assets/fonts/Roboto-Light.woff2") format("woff2"), url("@/assets/fonts/Roboto-Light.woff") format("woff");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: Roboto;
  font-display: swap;
  src: url("@/assets/fonts/Roboto-Medium.woff2") format("woff2"), url("@/assets/fonts/Roboto-Medium.woff") format("woff");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: Roboto;
  font-display: swap;
  src: url("@/assets/fonts/Roboto-Thin.woff2") format("woff2"), url("@/assets/fonts/Roboto-Thin.woff") format("woff");
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: Roboto;
  font-display: swap;
  src: url("@/assets/fonts/Roboto-Bold.woff2") format("woff2"), url("@/assets/fonts/Roboto-Bold.woff") format("woff");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: Roboto;
  font-display: swap;
  src: url("@/assets/fonts/Roboto-Black.woff2") format("woff2"), url("@/assets/fonts/Roboto-Black.woff") format("woff");
  font-weight: 900;
  font-style: normal;
}

.title-block {
  text-align: center;
  font-size: 34px;
  font-weight: 400;
}

@media (max-width: 500px) {
  .title-block {
    font-size: 25px;
  }
}

.text-block {
  text-align: center;
  font-weight: 300;
}

body {
  font-family: Roboto;
  font-size: 18px;
  line-height: 122.2222222222%;
  color: #070707;
}

body._lock {
  overflow: hidden;
}

._container {
  max-width: 1155px;
  margin: 0 auto;
  padding: 0 30px;
}

.wrapper {
  min-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

</style>
