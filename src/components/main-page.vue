<template>
   <div class="container">

      <div class="carts_wrapper">
         <h1 class="full_date">{{ current_date }}</h1>

         <div class="weekdays">
            <p></p>
            <p>Mo.</p>
            <p>Tu.</p>
            <p>We.</p>
            <p>Th.</p>
            <p>Fr.</p>
            <p>Sa.</p>
            <p>Su.</p>
         </div>
         
         <div 
            class="week"
            v-for="week in days"
            :key="week">
            <p>Week</p>
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
@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');

:root {
   --main-background: #0D1226;
   --active-days-background: #2B3C81;
   --not-active-days-background: #1A244C;
}

.container {
   height: 100vh;
   width: 100%;

   font-family: 'Montserrat', sans-serif;

   display: flex;
   justify-content: center;
   align-items: center;

   overflow: hidden;
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
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
   height: 15%;

   transition: 1s;
}

.week p {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100%;

   color: white;
   font-size: 17px;
}

/* .week:hover {
   height: 82vh;
} */

.weekdays {
   width: 100%;

   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

   justify-items: flex-end;
   padding-right: 10px;
   margin-top: 20px;
   margin-bottom: 5px;

   color: white;
   font-size: 17px;
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
   font-weight: 400;
   font-size: 25px;

   color: rgba(255, 255, 255, 0.7);
}

.active_month_day {
   border-radius: 2px solid rgba(0, 0, 0, 1);
}
</style>