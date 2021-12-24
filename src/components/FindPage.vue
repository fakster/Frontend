<template>
<section class="first">
  <div class="find-big">
    <div class="find">
      <div class="find-container">
        <div class="find-text_place">
          <input
            class="find-all"
            placeholder="Профессия, должность или компания"
          />
        
          <div class="text_icon_place">
            <search-icon class="email_icon"  :size="40"/>
          </div>  
        </div>
      </div>
      


      <div class="filtering">
        <select class="" name="Спеацильности" id="Specialist" >
          <option value="1">Программисты</option>
          <option value="2">Менеджеры</option>
          <option value="3">Cистемные аналитики</option>
          <option value="4">DevOps</option>
          <option value="5">QA специалисты</option>
          <option value="6">Другие специалисты</option>
        </select>
      </div>
    </div>
    <div class="results"></div>
    <section>
      <history/>
    </section>
    </div>
</section>
</template>
<<<<<<< HEAD
<style scoped>

=======



<script>

import history from './history.vue'
export default {
  components: { history },
  data:() =>({
    loading=true,
    records = [],
    
    
  }),
}
</script>



<style scoped>

.first{
  width: 1920px;
  height: 1000px;
  background: #fff;
}

>>>>>>> d875a41c79fde882c05abaf8637ebe440284710c
select {
  outline:none;
  border: 0px solid #168d73;
  padding-left: 10px;
  position: absolute;
  width: 400px;
  height: 90px;
  left: 0px;
  top: 0px;

  background: #1dc7a2;
  border-radius: 45px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 30px;

}

.filtering{
  
  overflow: hidden;
  position: absolute;
  width: 380px;
  height: 90px;
  left: 280px;
  top: 340px;

  background: #1dc7a2;
  border-radius: 45px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;

  color: rgba(16, 43, 62, 0.7);
}



/****************************************** */
.find-text_place{
  position: absolute;
  background: #1dc7a2;
  border-radius: 45px;
  width: 1360px;
  height: 93px;
  left: 0px;
  top: 0px;
}

.text_icon_place{
    position: absolute;
    width: 30px;
    height: 30px;
       left: 22px;
    top: 22px;
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
.find-all:focus{
    outline:none;
  padding-left: 74px;
  position: absolute;
  width: 1355px;
  height: 85px;
  left: 0px;
  top: 0px;

  background: #1dc7a2;
  border-radius: 45px;
  border: 3px solid #168d73;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 28px;
  display: flex;
  align-items: center;

  color: rgba(16, 43, 62, 0.7);
}
.find-all {
  outline:none;
  padding-left: 74px;
  position: absolute;
  width: 1360px;
  height: 90px;
  left: 0px;
  top: 0px;
  border:0px;
  background: #1dc7a2;
  border-radius:45px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 28px;
  display: flex;
}
.find-container{
   position: absolute;
  width: 1360px;
  height: 90px;
  left: 280px;
  top: 220px;
}

section {
  position: relative;
  width: 1920px;
  height: 1660px;

  background: #ffffff;
}

</style>