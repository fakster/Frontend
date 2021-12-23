<template>
    <nav class="navbar navbar-dark bg-primary fixed-top">
        <div class="container">
            <router-link class="nav-link" to="/"><home-icon class="icon-2x"  fillColor="#1DC7A2" :size="54"/></router-link>
                <input class="form-control" type="serach" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Поиск</button>
            <router-link class="nav-link" to="/auth"><account-icon class="icon-account"  fillColor="#1DC7A2" :size="54"/></router-link>
        </div>
    </nav>
</template>

<style scoped>
.navbar{
    background: #102B3E;
    position: relative;
    width: 1920px;
    height: 80px;
    left: 0px;
    top: 0px;
}
.form-control{
    position: absolute;
    top:14px;
    left:1400px;
    width: 320px;
    height: 44px;
    background: rgba(29, 199, 162, 0.7);
    border-radius: 15px;
}
.icon-2x{
    position: absolute;
    top:11px;
    left:43px;
}
.icon-account{
     position: absolute;
    top:13.75%;
    left:95.73%;
}
.btn {
    position: absolute;
    top:14px;
    left:1740px;
    width: 85px;
    height: 54px;
    background: rgba(29, 199, 162);
    border-radius: 30px;
    color:#fff;font-family: Geneva, Arial, Helvetica, sans-serif;font-size: 18px;

}

::-webkit-input-placeholder {color:#fff;font-family: Geneva, Arial, Helvetica, sans-serif;font-size: 18px;padding: 20px;}
::-moz-placeholder          {color:#fff;font-family: Geneva, Arial, Helvetica, sans-serif;font-size: 18px;padding: 20px;}/* Firefox 19+ */
:-ms-input-placeholder      {color:#fff;font-family: Geneva, Arial, Helvetica, sans-serif;font-size: 18px;padding: 20px;}

:focus::-webkit-input-placeholder {color: transparent}
:focus::-moz-placeholder          {color: transparent}
:focus:-moz-placeholder           {color: transparent}
:focus:-ms-input-placeholder      {color: transparent}
</style>
