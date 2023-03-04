<template>
  <section class="page__portfolio portfolio">
    <div class="portfolio__container _container">
      <h1 class="portfolio__header title-block"><span v-html="localization['title']"></span></h1>
      <div class="portfolio__section">
        <div class="portfolio__item">
          <a class="portfolio__image" href="http://smallapps.maxxounee.beget.tech/">
            <img src="@/assets/img/portfolio/portfolio_smallapps.png" alt="Portfolio image">
          </a>
          <div class="portfolio__link"><a href="http://smallapps.maxxounee.beget.tech/"><span
              v-html="localization['smallapps']"></span></a></div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['localization']
}
</script>

<style scoped>
.portfolio__container {
}

.portfolio__header {
  padding-top: 50px;
  margin-bottom: 47px;
}

.portfolio__section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.portfolio__item {
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.portfolio__image {
}

.portfolio__section img {
  height: 120px;
  border-radius: 10px;
  margin-bottom: 10px;
}

.portfolio__section img:hover {
  transform: scale(1.01) translate(0px, -1px);
  filter: drop-shadow(2px 3px 20px rgba(0, 0, 0, 0.05));
  transition: all 0.1s ease 0s;
}

.portfolio__section img:active {
  transform: scale(0.99) translate(0px, 0px);
  filter: none;
}

.portfolio__link a span {
  text-decoration: underline;
  font-weight: 300;
  color: #9d9d9d

}


</style>