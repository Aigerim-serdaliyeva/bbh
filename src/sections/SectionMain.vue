<template>
  <div class="section s-main">
    <div class="container">
      <img src="@/assets/images/desktop/home-welcome-title.svg" alt="">
      <h2>Стиль жизни успешных людей</h2>
      <img src="@/assets/images/desktop/home-welcome-grape.svg" alt="">

      <Form />
    </div>
  </div>
</template>

<script>
import Form from '../components/Form'
export default {
  components: {
    Form
  }
}
</script>

<style lang="scss" scoped>

  .s-main {
    background-image: url("../assets/images/desktop/home-welcome-bg.jpg");
    background-size: cover;
    background-position: center center;
    padding: 70px 0 100px;
  }

</style>