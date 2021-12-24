<template>
    <section>
      <div class="blok">
        <h class="name_vacancy">Название специальности из нашей базы</h>
        <h class="name_employment">Занятость из таблицы</h>
        <h class="name_company">Название компании</h>
        <h class="salary">З/п ХХХХX руб.</h>
        <h class="work_place">Офис/ Удаленная работа</h>
        <div class="description_company">
        <h class="head_blok_text">Описание компании </h> 
        <h class="blok_text">Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
          </h>   
        </div>
        <div class="requirements">
        <h class="head_blok_text">Ключевые требования</h> 
        <h class="blok_text">Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
          </h>   
        </div>
        <div class="сonditions">
        <h class="head_blok_text">Что доступно для вас</h> 
        <h class="blok_text">Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
          </h>   
        </div>
        <div class="btn_enter">
                <button class="btn_enter_background" type="submit">
                    <h3 class="btn_enter_text">Откликнуться </h3>
                </button>
            </div>
      </div>
    </section>
</template>

<style scoped>
.btn_enter{
    position: absolute;
    width: 292px;
    height: 56px;
    left: 35px;
    top: 919px;
}

.btn_enter_background:active{
    border-color: #168d73;
    border: 3px solid #168d73;
    position: absolute;
     width: 292px;
    height: 56px;
    left: 0px;
    top: 0px;

    background: #102B3E;
    border-radius: 35px;

    
}
.btn_enter_background{
    position: absolute;
    width: 292px;
    height: 56px;
    left: 0px;
    top: 0px;

    background: #102B3E;
    border-radius: 35px;

    
}
.btn_enter_text{
    position: absolute;
    width: 208px;
    height: 33px;
    left: 40px;
    top: -30px;
    

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


.сonditions{
  position: absolute;
width: 1206px;
height: 264px;
left: 0px;
top: 690px;

}
.requirements{
position: absolute;
width: 1206px;
height: 284px;
left: 0px;
top: 455px;

}
.blok_text{
  position: absolute;
width: 956px;
height: 212px;
left: 0px;
top: 64px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;

color: #000000;
}
.head_blok_text{
  position: absolute;
width: 344px;
height: 47px;
left: 0px;
top: 0px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 42px;

color: #000000;
}
.description_company{

  position: absolute;
width: 1206px;
height: 262px;
left: 0px;
top: 224px;
}
.work_place{
position: absolute;
width: 206px;
height: 56px;
left: 891px;
top: 114px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
text-align: center;

color: rgba(0, 0, 0, 0.7);

}
.salary{
  position: absolute;
  width: 231px;
  height: 35px;
  left: 588px;
  top: 124px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;

  color: rgba(0, 0, 0, 0.7);

}
.name_company{
position: absolute;
width: 286px;
height: 35px;
left: 0px;
top: 124px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 35px;

color: #1DC7A2;

}
.blok{
  position: absolute;
  width: 1220px;
  height: 1026px;
  left: 350px;
  top: 130px;

  
}
.name_vacancy{
position: absolute;
width: 1008px;
height: 70px;
left: 0px;
top: 0px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 56px;

color: #000000;
}
.name_employment{
  position: absolute;
width: 556px;
height: 32px;
left: 0px;
top: 54px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;

color: rgba(0, 0, 0, 0.7);

}

section {

  position: relative;
  width: 1920px;
  height: 1600px;

  
}
</style>
