<template>

    <section>
        <div class="container">
            <div class="Account_Icon_place">
            <account_circle-icon class="AccountCircleIcon"  :size="190"/>
            </div>
            <h3 class="enter">
                Вход в личный кабинет
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
            <div class="btn_enter">
                <button class="btn_enter_background" type="submit">
                    <h3 class="btn_enter_text"> Войти   </h3>
                </button>
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
    top: 365px;

}

.text_password{
    position: absolute;
    width: 400px;
    height: 70px;
    left: 100px;
    top: 469px;

}

.btn_enter{
    position: absolute;
    width: 400px;
    height: 70px;
    left: 100px;
    top: 630px;
}

.btn_enter_background:active{
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
.btn_enter_background{
    position: absolute;
    width: 400px;
    height: 70px;
    left: 0px;
    top: 0px;

    background: #102B3E;
    border-radius: 35px;

    
}
.btn_enter_text{
    position: absolute;
    width: 390px;
    height: 69px;
    left: 140px;
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
.enter{
    position: absolute;
    width: 400px;
    height: 50px;
    left: 125px;
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