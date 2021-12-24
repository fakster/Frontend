<template>
  <section>
    <h1>Создайте вашу вакансию и ожидайте лучшего сотрудника</h1>
    <h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut<br />
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    </h2>
    <div class="duties">
      <form  v-on:submit.prevent ="vacancy">
      <h3>Обязанности</h3>
      <input class="form-duties" v-model="duties" required />
      <h3 class="key">Ключевые требования</h3>
      <input class="form-key" v-model ="key"  required />
      <h3 class="work">Условия работы</h3>
      <input class="form-work" v-model="work" required />
      <h3 class="tags">График</h3>
      <input class="form-tags" />
      <h3 class="salary">Зарплата</h3>
      <input class="form-salary" v-model="salary" />
      <button class="btn btn-outline-success" type="submit">
        Создать вакансию
      </button>
      </form>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import router from '../router'
export default ({
  data() {
    return{
      salary:'',
      work:'',
      duties:'',
      key:''
    }
    
  },
  methods:{
    vacancy(){
      axios.post('api/vacancy/vacancy/',{
        salary:this.salary,
        requirments:this.work,
        conditions:this.duties
      }).then((res)=>{
        this.salary ='';
        this.work ='';
        this.duties = '';
        router.push({name:'FindPage'});
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  }
})
</script>

<style scoped>
.btn {
  position: absolute;
  width: 330px;
  height: 68px;
  left: 365px;
  top: 1060px;
  background: #102b3e;
  border-radius: 30px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  align-items: center;
  text-align: center;

  color: #ffffff;
}
section {
  position: relative;
  width: 1920px;
  height: 1250px;
  background: #ffffff;
}
h1,
h2 {
  position: relative;
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
}
.duties {
  position: absolute;
  width: 1083px;
  height: 1075px;
  left: 418px;
  top: 101px;
}
.form-duties {
  position: absolute;
  width: 1000px;
  height: 200px;
  left: 27px;
  top: 67px;
  background: rgba(29, 199, 162, 0.4);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
}

.key {
  position: absolute;
  width: 302px;
  height: 33px;
  left: 27px;
  top: 263px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 33px;
  /* identical to box height */
  color: #000000;
}
.form-key {
  position: absolute;
  width: 1000px;
  height: 200px;
  left: 27px;
  top: 338px;
  background: rgba(29, 199, 162, 0.4);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
}

.work {
  position: absolute;
  width: 216px;
  height: 33px;
  left: 27px;
  top: 539px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 33px;
  /* identical to box height */

  color: #000000;
}

.form-work {
  position: absolute;
  width: 1000px;
  height: 200px;
  left: 27px;
  top: 611px;

  background: rgba(29, 199, 162, 0.4);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
}

h3 {
  position: relative;
  width: 173px;
  height: 33px;
  left: 27px;
  top: 0px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 33px;
}

.tags {
  position: absolute;
  width: 81px;
  height: 25px;
  left: 27px;
  top: 834px;
}
.form-tags {
  position: absolute;
  width: 361px;
  height: 75px;
  left: 346px;
  top: 849px;

  background: rgba(29, 199, 162, 0.4);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
}
.salary {
  position: absolute;
  width: 157px;
  height: 25px;
  left: 27px;
  top: 945px;
}
.form-salary {
  position: absolute;
  width: 361px;
  height: 75px;
  left: 346px;
  top: 950px;

  background: rgba(29, 199, 162, 0.4);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
}
</style>