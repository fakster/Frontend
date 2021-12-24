<template>
  <div class="container">
    <h1 class="text-center">WomsChat!</h1>
    <div id="auth-container" class="row">
      <div class="col-sm-4 offset-sm-4">
        <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active"
               id="signup-tab"
               data-toggle="tab"
               href="#signup"
               role="tab"
               aria-controls="signup"
               aria-selected="true">
                Регистрация
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link"
               id="signin-tab"
               data-toggle="tab"
               href="#signin"
               role="tab"
               aria-controls="signin"
               aria-selected="false">
                Вход
            </a>
          </li>
        </ul>

        <div class="tab-content" id="myTabContent">

          <div class="tab-pane fade show active"
               id="signup"
               role="tabpanel"
               aria-labelledby="signin-tab">
            <form @submit.prevent="signUp">
              <div class="form-group">
                <input v-model="email"
                       type="email"
                       class="form-control"
                       id="email"
                       placeholder="Email"
                       required>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <input v-model="username"
                         type="text"
                         class="form-control"
                         id="username"
                         placeholder="Логин"
                         required>
                </div>
                <div class="form-group col-md-6">
                  <input v-model="password"
                         type="password"
                         class="form-control"
                         id="password"
                         placeholder="Пароль"
                         required>
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="toc" required>
                  <label class="form-check-label" for="gridCheck">
                    Согласен с условиями
                  </label>
                </div>
              </div>
              <button type="submit"
                      class="btn btn-block btn-primary">Зарегистрироваться
              </button>
            </form>
          </div>

          <div class="tab-pane fade"
               id="signin"
               role="tabpanel"
               aria-labelledby="signin-tab">
            <form @submit.prevent="signIn">
              <div class="form-group">
                <input v-model="username"
                       type="text"
                       class="form-control"
                       id="username"
                       placeholder="Username"
                       required>
              </div>
              <div class="form-group">
                <input v-model="password"
                       type="password"
                       class="form-control"
                       id="password"
                       placeholder="Password"
                       required>
              </div>
              <button type="submit" class="btn btn-block btn-primary">Войти
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'

export default {
    data() {
        return{
            email:'',
            username:'',
            password:''
        }
        
    },
    methods:{
        signUp(){
        axios.post('auth/users/',{
            email:this.email,
        password:this.password,
        username:this.username
        })
        .then((res)=>{
        this.signIn()
        })
        .catch((err)=>{
        console.log(err);})
    },
    signIn(){
        const credentials = {
          username: this.username,
          password: this.password
        }
        axios.post('auth/token/login/',credentials).then((res)=>{
            sessionStorage.setItem('authToken',res.auth_token)
            sessionStorage.setItem('username',this.username)
            router.push({name:'Profile'});
        }).catch((err)=>{
        console.log(err);})
        
    }
    }
}
</script>