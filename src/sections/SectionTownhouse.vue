<template>
  <div class="s-townhouse">
    <div class="container">
      <div class="s-townhouse__content"
        v-for="item in info"
        :key="item.id"
      >
        ТАУНХАУС <br>
        {{ item.title }} <br>
        {{ item.text }}
      </div>
      <div class="s-townhouse__layout">
        <img src="../assets/images/desktop/home-townhouse-layout.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: [
        {
          title: '1-ой очереди',
          text: 'Свободно: 23 из 28'
        }, 
        {
          title: '2-ой очереди',
          text: 'Свободно: 23 из 28'
        }
      ]
    }
  }
}
</script>