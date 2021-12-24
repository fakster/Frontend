<template>
<<<<<<< HEAD

    <section>
        <div class="container">
            <div class="Account_Icon_place">
            <account_circle-icon class="AccountCircleIcon"  :size="190"/>
            </div>
            <h3 class="registration">
                Регистрация
            </h3>
            <div class="text_email">
                <div class="text"> 
                    
                        <input class="input_data"
                        placeholder="Ваш email"
                        />
                         <div class="text_icon_place">
                        <email-icon class="email_icon"  :size="35"/>
                    </div> 
                </div>
                
            </div>  
            <div class="text_phone">
                 <div class="text">  
                   
                        <input class="input_data"
                        placeholder="Телефон"
                        />
                          <div class="text_icon_place">
                        <phone-icon class="email_icon"  :size="35"/>
                    </div> 
                </div>
            </div>
            <div class="text_password">
                 <div class="text">  
                   
                        <input class="input_data"   
                        placeholder="Ваш Пароль"
                        />
                        <div class="text_icon_place">
                            <key-icon class="email_icon"  :size="35"/>
                        </div>  
                </div>
            </div>
            <div class="btn_registration">
                <button class="btn_registration_background" type="submit">
                    <h3 class="btn_registration_text"> Зарегистрироваться </h3>
                </button>
            </div>
            
        </div>   
    </section>
</template>




<style scoped>

.text_icon_place{
    position: absolute;
    width: 30px;
    height: 30px;
   left: 24px;
    top: 13px;
}
.email_icon{
    position: absolute;
    left: 8.33%;
    right: 8.33%;
    top: 16.67%;
    bottom: 16.67%;
    Background: cover;
    color: rgba(16, 43, 62, 0.7);

}
.text{
position: absolute;
width: 400px;
height: 70px;
left: 0px;
top: 0px;

background: #FFFFFF;
border-radius: 35px;
}
.input_data:focus{
    padding-left: 72px;
opacity: 1;
position: absolute;
width: 400px;
height: 70px;
left: 0px;
top: 0px;
outline:none;
color:#c99780;
border-color: #168d73;
border: 3px solid #168d73;
box-sizing: border-box;
border-radius: 35px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;

color: rgba(16, 43, 62, 0.7);
}
.input_data{
opacity: 1;
position: absolute;
width: 328px;
height: 70px;
left: 72px;
top: 0px;
border-radius: 0px 35px 35px 0px;
border: 0px solid #000000;
box-sizing: border-box;


font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;

color: rgba(16, 43, 62, 0.7);

}

.text_email{
    position: absolute;
    width: 400px;
    height: 70px;
    left: 100px;
    top: 370px;

}
.text_phone{
    position: absolute;
    width: 400px;
    height: 70px;
    left: 100px;
    top: 465px;

}
.text_password{
    position: absolute;
    width: 400px;
    height: 70px;
    left: 100px;
    top: 560px;

}
.text_password2{
    position: absolute;
    width: 400px;
    height: 70px;
    left: 100px;
    top: 556px;


}
.btn_registration{
    position: absolute;
    width: 400px;
    height: 70px;
    left: 100px;
    top: 656px;
}

.btn_registration_background:active{
    border-color: #168d73;
    border: 3px solid #168d73;
    position: absolute;
    width: 400px;
    height: 70px;
    left: 0px;
    top: 0px;

    background: #102B3E;
    border-radius: 35px;

    
}
.btn_registration_background{
    position: absolute;
    width: 400px;
    height: 70px;
    left: 0px;
    top: 0px;

    background: #102B3E;
    border-radius: 35px;

    
}
.btn_registration_text{
    position: absolute;
    width: 390px;
    height: 69px;
    left: 50px;
    top:-41px;
    

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
}
.registration{
    position: absolute;
    width: 222px;
    height: 50px;
    left: 206px;
    top: 255px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;

    color: #FFFFFF;
}
.container {
    position: relative;
    width: 600px;
    height: 800px;

    background: #1DC7A2;
    border-radius: 25px;
}
.AccountCircleIcon{
position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;
Background: cover;
color: #102B3E;

}
.Account_Icon_place{
    position: absolute;
width: 200px;
height: 200px;
left: 200px;
top: 20px;
}

</style>
=======
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
>>>>>>> d875a41c79fde882c05abaf8637ebe440284710c
