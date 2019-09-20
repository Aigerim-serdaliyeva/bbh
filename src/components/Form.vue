<template>
   <div class="form form--vertical ">
     <form action="/mail.php" method="post">
      <div class="form__title">Оставьте заявку и я свяжусь с вами, в удобное для вас время!</div> 
      <div class="form__content">
        <input type="hidden" name="info" value="Оставьте заявку и я свяжусь с вами, в удобное для вас время!">
        <div class="input-div">
          <p class="input__title">Ваше имя</p>
          <input type="text" v-model="name" class="input" name="name" required>
        </div>
        <div class="input-div">
          <p class="input__title">Ваш телефон</p>
          <input type="tel" v-model="phone" class="input" name="phone" required>
          <span class="error-message">Заполните это поле</span>
        </div>
        <div class="input-div">
          <p class="input__title">E-mail</p>
          <input type="email" v-model="email" class="input" name="email">
        </div>
        <div class="input-div">
          <p class="input__title">Удобное время для звонка</p>
          <input v-model="time" type="time" class="input" name="time">
        </div>
        <button class="button ajax-submit" type="submit" id="ya_u4astvui">{{ buttonText }}</button>
      </div>
    </form>
   </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      phone: null,
      email: '',
      time: '',
      buttonText: 'Отправить',
      success: false,
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style lang="scss" scoped>

  .button {
    color: #39071F;
    font-size: 18px;
    border: none;
    position: relative;
    display: inline-block;
    text-decoration: none;
    padding: 5px;
    max-width: 165px;
    width: 100%;
    white-space: nowrap;
    border: none;
    cursor: pointer;
  }

  .input-div {
    position: relative;
    
    .input {
      width: 100%;  
    }
  }

  .input, .textarea {
    font-size: 16px;
    color: #fff;
    text-align: center;
    line-height: inherit;
    padding: 2px 10px;   
    max-width: 180px;
    background: transparent;
    border: 0.7px solid #fff;
    width: 100%;
    position: relative;

    &__title {
      margin-bottom: 0;
    }
    
    &.error {
      border-color: red;
      color: red;

      &+.error-message {
        display: block;
      }
    }

    &+.error-message {
      display: none;
      text-align: left;
      color: red;
      margin-top: 5px;
    }

    &::-webkit-input-placeholder {
      color: #fff;
      font-style: italic;
      font-weight: normal;
      opacity: 1;
    }
    
    &::-moz-placeholder {
      color: #fff;
      font-style: italic;
      font-weight: normal;
      opacity: 1;
    }
    
    &:-ms-input-placeholder {
      color: #fff;
      font-style: italic;
      font-weight: normal;
      opacity: 1;
    }
    
    .inverse & {
      color: #fff;

      &::-webkit-input-placeholder {
        color: #fff;
      }
      
      &::-moz-placeholder {
        color: #fff;
      }
      
      &:-ms-input-placeholder {
        color: #fff;
      } 
    }
    
    &.error::-webkit-input-placeholder {
      color: red;
    }
    
    &.error::-moz-placeholder {
      color: red;
    }
    
    &.error:-ms-input-placeholder {
      color: red;
    }
  }

  .form {
    position: relative;  
    background: #39071F;
    border-radius: 10px;
      
    &__title {
      font-size: 20px;
      text-align: center;
      margin-bottom: 20px;
    }

    .input-div, .button {
      margin-bottom: 10px;
    }

    &__info {
      font-size: 10px;
      text-align: left;
    }

    &--horizontal {
      .form {
        &__content, &__info {
          max-width: 800px;
          margin: 0 auto;
        }

        &__content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
      }

      .input-div {
        margin-right: 20px;
        width: 100%;
      }
    }

    &--vertical {
      max-width: 290px;
      margin: 0 0 0 auto;
      
      .form {
        &__content {
          // max-width: 260px;
          margin: 0 auto;    
        }
      }

      .button {
        width: 100%;
      }
    }
  }

</style>