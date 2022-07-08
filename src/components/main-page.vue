<template>
   <div class="container">

      <div class="carts_wrapper">
         <h1 class="full_date">{{ current_date }}</h1>

         <div class="weekdays">
            <p>Mon.</p>
            <p>Tue.</p>
            <p>Wen.</p>
            <p>Thu.</p>
            <p>Fri.</p>
            <p>Sat.</p>
            <p>Sun.</p>
         </div>
         
         <div 
            class="week"
            v-for="week in days"
            :key="week">
            <day-cart 
               v-for="day in week"
               :key="day"
               :dayData="day"/>
         </div>
      </div>
      
   </div>
</template>

<script>
import getMonthInCalendarFormat from '../scripts/full_month'
import dayCart from "./day-cart.vue"

export default{
   name: 'mainPage',
   components: {
      dayCart
   },
   data(){
      return {
         days: [],
         current_date: null
      }
   },
   methods: {},
   computed: {},
   created() {
      const monthNames = ["January", "February", "March", "April", "May", "June",
         "July", "August", "September", "October", "November", "December"
      ];

      let date = new Date();

      let current_day = date.getDate();
      let current_month = monthNames[date.getMonth()];
      let current_year = date.getFullYear();

      this.current_date = `${current_day} ${current_month} ${current_year}`


      this.days = getMonthInCalendarFormat(date.getMonth(), current_year);
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
   margin-top: 50px;
   height: 90%;
   width: 80%;

   /* border: 1px solid black; */
}

.week {
   width: 100%;

   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
   height: 15%;
}

.weekdays {
   width: 100%;

   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

   justify-items: center;
   margin-top: 20px;
}

.day {
   border: 2px solid rgba(0, 0, 0, 0.2);

   margin: 10px;
   padding: 5px;

   border-radius: 7px;

   transition: 0.3s;
}

.day:hover {
   background-color: rgba(0, 0, 0, 0.1);
   cursor: pointer;
}

.full_date {
   font-weight: 700;
}

.active_month_day {
   border-radius: 2px solid rgba(0, 0, 0, 1);
}
</style>