<template>
  <section>
    <nav class="sidebar-sticky bg-dark navbar-dark navbar-expand-md">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto flex-column">
          <li class="nav-item active">
            <router-link to=/profile><a class="nav-link">Профиль</a></router-link>
          </li>
          <li class="nav-item response">
            <a href="" class="nav-link">Отклики</a>
          </li>
          <li class="nav-item vacancy">
            <a href="" class="nav-link">Вакансии</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
        <div class="first-row">
            <p class="first-cell">Компания</p>
            <input class="form-control" placeholder="Название компании">
            <button type="submit" class="btn btn-outline-success">Изменить</button>
        </div>
        <div class="second-row">
            <p class="first-cell">Пароль</p>
            <input class="form-control" placeholder="Введите новый пароль">
            <button type="submit" class="btn btn-outline-success">Изменить</button>
        </div>
         <div class="third-row">
            <p class="first-cell">Email</p>
            <input class="form-control" placeholder="test@test.com">
            <button type="submit" class="btn btn-outline-success">Изменить</button>
        </div>
         <div class="four-row">
            <p class="first-cell">Номер телефона</p>
            <input class="form-control" placeholder="+79229120319">
            <button type="submit" class="btn btn-outline-success">Изменить</button>
        </div>
         <div class="five-row">
            <p class="first-cell">Город</p>
            <input class="form-control" placeholder="Санкт-Петербург">
            <button type="submit" class="btn btn-outline-success">Изменить</button>
        </div>
    </div>
  </section>
</template>

<style scoped>
#createVAc{
    position: absolute;
    left:40 px;
    bottom: 110 px;
}

.second-row{
    position: absolute;
    width: 1300px;
    height: 100px;
    top:100px;
    border-top: black solid;
}
.third-row{
    position: absolute;
    width: 1300px;
    height: 100px;
    top:200px;
    border-top: black solid;
}
.four-row{
    position: absolute;
    width: 1300px;
    height: 100px;
    top:300px;
    border-top: black solid;
}
.five-row{
    position: absolute;
    width: 1300px;
    height: 100px;
    top:400px;
    border-top: black solid;
}

.form-control{
    position: absolute;
    width: 330px;
    height: 40px;
    left: 440px;
    top: 20px;
    background: #fff;
    border-radius: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
}
::-webkit-input-placeholder {color:#000;font-family: Roboto;font-style: normal;font-weight: normal;font-size: 28px;padding-left: 30px;opacity: 60%;}
::-moz-placeholder          {color:#000;font-family: Roboto;font-style: normal;font-weight: normal;font-size: 28px;padding-left: 30px;opacity: 60%;}/* Firefox 19+ */
:-ms-input-placeholder      {color:#000;font-family: Roboto;font-style: normal;font-weight: normal;font-size: 28px;padding-left: 30px;opacity: 60%;}

:focus::-webkit-input-placeholder {color: #1DC7A2}
:focus::-moz-placeholder          {color: #1DC7A2}
:focus:-moz-placeholder           {color: #1DC7A2}
:focus:-ms-input-placeholder      {color: #1DC7A2}


.btn {
  position: absolute;
  top: 20px;
  right: 100px;
  width: 180px;
  height: 54px;
  background: #102b3e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 45px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  align-items: center;
  text-align: center;
  color: #ffffff;
}
.first-cell {
  position: absolute;
  top: 00px;
  left: 70px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #102b3e;
}


.container {
  position: absolute;
  width: 1300px;
  height: 600px;
  left: 480px;
  top: 50px;

  background: #ffffff;
}
section {
  position: relative;
  top: -15px;
  width: 1920px;
  height: 576px;
  background: #ffffff;
}

li.active {
  list-style-type: none;
  position: absolute;
  width: 370px;
  height: 60px;
  left: 0px;
  text-align: center;
  background: linear-gradient(
    90deg,
    #1bdbb1 9.73%,
    rgba(49, 207, 172, 0.644444) 40.54%,
    rgba(88, 185, 164, 0) 96.39%
  );
}
a.nav-link {
  position: absolute;
  width: 103px;
  height: 28px;
  left: 80px;
  top: 16px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-decoration: none;
  color: #102b3e;
}
li.response {
  position: absolute;
  width: 370px;
  height: 60px;
  left: 0px;
  top: 60px;
}

li.vacancy {
  position: absolute;
  width: 370px;
  height: 60px;
  left: 0px;
  top: 120px;
}

li.nav-item :hover :not(li.active) {
  color: #1bdbb1;
}
</style>