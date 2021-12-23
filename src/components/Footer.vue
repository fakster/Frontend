<template>
  <footer class="footer">
    <div class="social">
        <h2 class="social">Мы в соцсетях</h2>
        <a class="btn instagram" href="#" role="button"><instagram-icon  fillColor="#1DC7A2" :size="50"/></a>
        <a class="btn twitter" href="#" role="button"><twitter-icon  fillColor="#1DC7A2" :size="50"/></a>
        <a class="btn facebook" href="#" role="button"><facebook-icon   fillColor="#1DC7A2" :size="50"/></a>

    </div>
    <div class="contact-us">
        <h2 class="contact-us">Связаться с нами</h2>
        <input class="form-control"  type="email" placeholder="test@exapmle.com" aria-label="email">
    </div>
    <div class="documents">
            <ul class="list">
            <li>
                <a href="#!" class="text">О нас</a>
            </li>
            <li>
                <a href="#!" class="text">Политика конфедициальности</a>
            </li>
            <li>
                <a href="#!" class="text">Условия оказания услуг</a>
            </li>
            <li>
                <a href="#!" class="text">Условия использования сайта</a>
            </li>
            </ul>
    </div>
  </footer>
</template>


<style scoped>
.footer{
    background: #102B3E;
    position: relative;
    width: 1920px;
    height: 324px;
    left: 0px;
    bottom: 0px;
}
li{
    list-style-type: none;
    margin-top:40px;
    
}
.text{
    font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;

color: #1DC7A2;
}
a{
    text-decoration: none;
}
a.text:hover{
    color: #fff;
}
h2.contact-us{
    position: absolute;
    width: 235px;
    height: 33px;
    left: 12px;
    top: 100px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 33px;

    color: #1DC7A2;

}


h2.social{
    position: absolute;
    width: 262px;
    height: 33px;
    left: 60px;
    top: 100px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 33px;
    color: #1DC7A2;
}
.instagram {
    position: absolute;
    left: 60px;
    top: 169px;
}
.twitter{
    position: absolute;
    left: 130px;
    top: 169px;
}
.facebook{
    position: absolute;
    left: 200px;
    top: 169px;
}
div.contact-us{
    position: absolute;
    width: 558px;
    height: 324px;
    left: 594px;
    top: 0px;
}
.documents{
    position: absolute;
    width: 371px;
    height: 324px;
    left: 1479px;
    top: 0px;
}
.form-control{
    position: absolute;
    width: 546px;
    height: 50px;
    left: 6px;
    top: 166px;
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

</style>