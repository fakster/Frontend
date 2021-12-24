<template>
  <section>
    <div class="container">
      <div class="container-login100">
        <div class="wrap-login100">
          <form v-on:submit.prevent="login" class="login100-form validate-form">
            <span class="login100-form-title"> Member Login </span>
            <!--<h1 class="h3 mb-3 font-weight-normal"><img class ="image" src="static/logo.png"></h1>-->
            <div class="wrap-input100">
              <input
                type="email"
                class="input100"
                name="email"
                v-model="login"
                placeholder="Введите Email"
                required
              />
              <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100">
              <input
                type="password"
                class="input100"
                name="password"
                v-login="password"
                placeholder="Введите Пароль"
                minlength="6"
                required
              />
              <span class="focus-input100"></span>
              <span class="symbol-input100"><key-icon /></span>
            </div>
            <div class="container-login100-form-btn">
              <button @click="setLogin" class="login100-form-btn">Войти</button>
            </div>
            <div class="text-center p-t-12">
              <span class="txt1"> Forgot </span>
            </div>
            <div class="text-center p-t-136">
              <a class="txt2">
                <router-link to="/register"
                  >Зарегистрироваться</router-link>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
import router from '../router'
export default {
   name: "Login",
   data(){
    return {
      login:'',
      password:''
    }
  },
  methods:{
    setLogin(){
      axios.post('api-auth/',{
        login:this.login,
        password:this.password
      }).then((res)=>{
        this.login ='';
        this.password ='';
        router.push({name:'Profile'});
        console.log(Response)
      })
      .catch((err)=>{
        console.log(err);
      })
        

    }
  }
}
</script>


<style scoped>
section {
  position: relative;
  width: 1920px;
  height: 600px;

}
.container{
    position: absolute;
width: 300px;
height: 400px;
top:100px;
left:810px;
background: #1DC7A2;
border-radius: 25px;
}
.container-login{
    position: absolute;
    top:200px;
    left:50px;
}
.wrap-login100{
    position: relative;
    top:200px;
    left:50px;
}
.login100-form-title{
position: absolute;
left: 25px;
top: -100px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
color:#fff

}

.login100-form-btn{
    position: absolute;
    top:100px;
    left:50px;
    width: 85px;
    height: 35px;
    background: #102B3E;
    border-radius: 30px;
    color:#fff;font-family: Geneva, Arial, Helvetica, sans-serif;font-size: 18px;
}

input{
    position: relative;
    width:200px;
    height: 35px;
    border-radius: 25px;
    margin-top:10px;
}
</style>

<script>
import axios from 'axios'
import router from '../router'
import EventBus from './EventBus'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  }, methods:{}
};