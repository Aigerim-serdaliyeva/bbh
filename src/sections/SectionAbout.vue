<template>
  <div class="s-about">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2 class="s-about__title">BlackBerry Hills</h2>
          <div class="s-about__text">BlackBerry Hills – таунхаусы бизнес-класса, расположенные в элитном районе, в 10 минутах от центра города. Это спокойный и экологически чистый район, в котором Вы сможете насладиться тишиной, свежим воздухом и приятными прогулками, не выезжая за пределы города. Прежде чем приступить к строительству, мы кропотливо прорабатывали каждую деталь и тщательно продумывали каждое архитектурное решение. Наши дома наделены особенным характером, подчеркивающим исключительность будущих владельцев.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .s-about {
    background-image: url("../assets/images/desktop/home-about-bg.jpg");
    background-size: cover;
    background-position: center center;
    padding: 100px 0;

    &__title {
      font-size: 36px;
    }

    &__text {
      font-size: 25px;
      max-width: 480px;
      margin: 0 auto;
    }
  }
</style>