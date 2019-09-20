<template>
  <div class="header">
    <div class="container">
      <div class="header__content">
        <router-link to="/" class="logo">
          <img src="@/assets/images/global/header-logo.svg" alt="">
        </router-link>
        <nav class="main-menu">
          <ul class="navigation ">
            <li class="link active"
              v-for="(item) in menu"
              :key="item.id"
            >
              <router-link to=""
                @click.native="goTo(item.attr.to, item.attr.scroll)"
              >{{ item.name }}</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: require("@/assets/json/menu")
    }
  },
  methods: {
    goTo(path, scrollTo) {
      this.$router.push(path);
      // setTimeout( () => {
      //   this.$scrollTo(scrollTo)
      // }, 100)
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    background-color: rgb(57, 7, 31);
    padding: 20px 0;
    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .main-menu {  
    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
      padding: 0;
      margin: 0;    
    }

    li {
      margin-left: 28px;

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
      font-size: 24px;
      text-align: center;
      &.inverse {
        color: #fff;
      }
    }
  }
</style>