<template>
  <div class="header">
    <div class="container">
      <div class="header__content">
        <router-link to="/" class="logo">
          <img src="@/assets/images/global/header-logo.svg" alt="">
        </router-link>
        <nav class="main-menu">
          <div class="container">
            <ul class="navigation ">
              <li class="link active">
                <router-link to="/">О BlackBerry Hills</router-link>
              </li>
              <li class="link active">
                <router-link :to="'/advantage'">Преимущества</router-link>
              </li>
              <li class="link active">
                <router-link :to="'/gallery'">Галерея</router-link>
              </li>
              <li class="link active">
                <router-link :to="'/layout'">Планировка</router-link>
              </li>
              <li class="link active">
                <router-link :to="'/stages'">Этапы строительства</router-link>
              </li>
              <li class="link active">
                <router-link :to="'/contact'">Контакты</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .header {
    background-color: rgb(57, 7, 31);
    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .main-menu {  
    padding: 20px 0;
    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
      padding: 0;
      margin: 0;    
    }

    li {
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }

      &.link a:hover, &.active a {
        color: #fff !important;
      }
    }

    a {
      display: inline-block;
      line-height: 1.5;
      color:  #2D2D2D;
      text-decoration: none;
      font-weight: normal;
      font-size: 18px;
      text-align: center;
      &.inverse {
        color: #fff;
      }
    }
  }
</style>