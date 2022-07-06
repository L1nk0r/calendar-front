<template>
   <div class="container">

      <div class="carts_wrapper">
         <div 
            class="week"
            v-for="week in days"
            :key="week">
            <div 
               class="day"
               v-for="day in week"
               :key="day">
                  {{ day }}
            </div>
         </div>
      </div>
      
   </div>
</template>

<script>
export default{
   name: 'mainPage',
   components: { },
   data(){
      return {
         days: []
      }
   },
   methods: {},
   computed: {},
   created() {
      for (let i = 0; i < 5; i++) {
         let week = [];
         for (let j = 0; j < 7; j++){
            let day = i * 7 + j + 1;
            week.push(day);
         }
         this.days.push(week);
      }
      console.log(this.days);
   },
   mounted() {}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'); 

.container {
   height: 100vh;
   width: 100%;

   font-family: 'Montserrat', sans-serif;

   display: flex;
   justify-content: center;
   align-items: center;
}

.carts_wrapper {
   height: 80%;
   width: 80%;

   border: 1px solid black;
}

.week{
   width: 100%;

   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
   height: 20%;
}

.day {
   border: 1px solid red;
   margin: 10px;
   padding: 5px;

   transition: 0.3s;
}

.day:hover{
   background-color: rgba(0, 0, 0, 0.1);
   cursor: pointer;
}
</style>