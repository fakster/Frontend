<template>
<section class="first">
  <div class="find-big">
    <div class="find">
      <div class="find-container">
        <input
          class="find-all"
          placeholder="Профессия, должность или компания"
        />
      </div>
      <div class="filtering">
        <select name="Спеацильности" id="Specialist">
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

select {
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
  font-size: 26px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #102b3e;
}

.find-all {
  position: absolute;
  width: 1360px;
  height: 90px;
  left: 280px;
  top: 220px;

  background: #1dc7a2;
  border-radius: 45px;

    font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;
}
</style>