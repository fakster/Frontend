<template>
  <section>
    <div class="container">
      <h1>Найди работу с нашим сервисом</h1>
      <div class="image"></div>
      <h3>
        Лучшие вакансии со всех сайтов вакансий собранны в одном месте<br />
        Попробуй прям сейчас
      </h3>
      <button class="btn btn-outline-success" type="submit">
        Найти работу
      </button>
    </div>
    <div class="container1">
      <h1>Lorem ipsum dolor sit amet</h1>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      </h3>
      <button class="btn btn-outline-success" type="submit">
        Найти сотрудника
      </button>
    </div>
    <div class="programmers">
      <div class="up">
        <h4>Программисты</h4>
      </div>
      <p class="card-text">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipis cing elit, <br />sed do eiusmod tempor incididunt
      </p>
      <p class="salary">20000-350000 руб.</p>
    </div>
    <div class="managers">
      <div class="up">
        <h4>Менеджеры</h4>
      </div>
      <p class="card-text">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipis cing elit, <br />sed do eiusmod tempor incididunt
      </p>
      <p class="salary">20000-350000 руб.</p>
    </div>
    <div class="system">
      <div class="up">
        <h4>Системные аналитики</h4>
      </div>
      <p class="card-text">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipis cing elit, <br />sed do eiusmod tempor incididunt
      </p>
      <p class="salary">20000-350000 руб.</p>
    </div>
    <div class="devops">
      <div class="up">
        <h4>DevOps</h4>
      </div>
      <p class="card-text">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipis cing elit, <br />sed do eiusmod tempor incididunt
      </p>
      <p class="salary">20000-350000 руб.</p>
    </div>
    <div class="qa">
      <div class="up">
        <h4>QA инженеры</h4>
      </div>
      <p class="card-text">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipis cing elit, <br />sed do eiusmod tempor incididunt
      </p>
      <p class="salary">20000-350000 руб.</p>
    </div>
    <div class="other">
      <div class="up">
        <h4>Другие специалисты</h4>
      </div>
      <p class="card-text">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipis cing elit, <br />sed do eiusmod tempor incididunt
      </p>
      <p class="salary">20000-350000 руб.</p>
    </div>
  </section>
</template>

<style scoped>
.managers {
  position: absolute;
  width: 350px;
  height: 350px;
  left: 785px;
  top: 850px;

  border: 1.5px solid #102b3e;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 15px;
}
.system {
  position: absolute;
  width: 350px;
  height: 350px;
  left: 1155px;
  top: 850px;

  border: 1.5px solid #102b3e;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 15px;
}
.devops {
  position: absolute;
  width: 350px;
  height: 350px;
  left: 415px;
  top: 1250px;

  border: 1.5px solid #102b3e;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 15px;
}
.qa {
  position: absolute;
  width: 350px;
  height: 350px;
  left: 785px;
  top: 1250px;

  border: 1.5px solid #102b3e;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 15px;
}
.other {
  position: absolute;
  width: 350px;
  height: 350px;
  left: 1155px;
  top: 1250px;

  border: 1.5px solid #102b3e;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 15px;
}

.programmers {
  position: absolute;
  width: 350px;
  height: 350px;
  left: 415px;
  top: 850px;
  border: 1.5px solid #102b3e;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 15px;
}
.up {
  position: absolute;
  width: 320px;
  height: 100px;
  left: 15px;
  top: 10px;

  background: #102b3e;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}
p.card-text {
  position: absolute;
  left: 17px;
  top: 100px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;

  color: #000000;
}
p.salary {
  position: absolute;
  width: 206px;
  height: 28px;
  left: 15px;
  bottom: 0px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  color: #102b3e;
}
h4 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: center;

  color: #ffffff;
}

section {
  position: relative;
  width: 1920px;
  height: 1650px;
  background: #ffffff;
}
.image {
  width: 1920px;
  height: 400px;
  background-image: url(https://www.englishdom.com/dynamicus/blog-post/000/001/667/1548426704_content_700x455.jpg?1548426705618);
  background-color: #cccccc;
  opacity: 40%;
}
h1 {
  position: absolute;
  width: 965px;
  height: 59px;
  left: 476px;
  top: 85px;
  z-index: 2;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 59px;
  /* identical to box height */

  text-align: center;
  color: #102b3e;
}

.btn {
  position: absolute;
  width: 286px;
  height: 68px;
  left: 815px;
  top: 288px;

  background: #102b3e;
  border-radius: 30px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  align-items: center;
  text-align: center;

  color: #ffffff;
}
h3 {
  position: absolute;
  width: 775px;
  height: 56px;
  left: 571px;
  top: 180px;
  z-index: 2;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: center;

  color: #102b3e;
}
.container {
  position: relative;
}
.container1 {
  position: relative;
  width: 1920px;
  height: 400px;
  background: rgba(29, 199, 162, 0.4);
  backdrop-filter: blur(4px);
}
</style>