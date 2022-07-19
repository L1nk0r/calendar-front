<template>
   <div class="container">
      <div 
         class="swipe left"
         @click="left()">
         {{ monthNames[getPreviousMonthNumber()] }}
      </div>
      <div class="carts_wrapper">
         <h1 
         class="full_date"
         @click="backToTodaysMonth()">{{ current_date }}</h1>
         <button v-if="showenWeek != -1" @click="showenWeek = -1">Reset</button>
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
            class="days_container"
            v-for="(week, id) in days"
            :key="week">

            <div 
            class="temp_container"
            v-if="showenWeek == -1 || showenWeek == id">

               <div 
               class="week">

                  <p
                  @click="openWeek(id)">Week {{ id + 1 }}</p>
                  <day-cart 
                     v-for="day in week"
                     :key="day"
                     :dayData="day"
                     :currentMonth="current_month_global"
                     :currentYear="current_year_global"
                     :showenWeek="showenWeek"
                     :weekId="id"
                     class="day-cart"/>

               </div>
            </div>
            
         </div>
      </div>
      
      <div 
         class="swipe right"
         @click="right()">
         {{ monthNames[getNextMonthNumber()] }}
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
         current_date: null,
         current_month_global: null,
         current_year_global: null,
         swipe_index: 0,
         monthNames: ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
         ],
         showenWeek: -1,
      }
   },
   methods: {
      left(){
         this.swipe_index = -1;
         this.current_month_global += this.swipe_index;
         if (this.current_month_global < 0){
            this.current_year_global -= 1;
            this.current_month_global = this.getPreviousMonthNumber();
         }
         this.current_date = `${this.monthNames[this.current_month_global]} ${this.current_year_global}`;
         this.days = getMonthInCalendarFormat(this.current_month_global, this.current_year_global);
      },
      right(){

         this.swipe_index = 1;
         this.current_month_global += this.swipe_index;
         if (this.current_month_global > 11){
            this.current_year_global += 1;
            this.current_month_global = this.getNextMonthNumber();
         }
         this.current_date = `${this.monthNames[this.current_month_global]} ${this.current_year_global}`;
         this.days = getMonthInCalendarFormat(this.current_month_global, this.current_year_global);
      },
      backToTodaysMonth(){
         let date = new Date();
         this.swipe_index = 0;
         this.current_month_global = date.getMonth();
         this.current_year_global = date.getFullYear();
         this.days = getMonthInCalendarFormat(this.current_month_global, this.current_year_global);
      },
      getPreviousMonthNumber(){
         if (this.current_month_global - 1 < 0){
            return 11
         } else {
            return this.current_month_global - 1
         }
      },
      getNextMonthNumber(){
         if (this.current_month_global + 1 > 11){
            return 0
         } else {
            return this.current_month_global + 1
         }
      },
      openWeek(id){
         this.showenWeek = id;
      }
   },
   computed: {},
   created() {

      let date = new Date();

      let current_day = date.getDate();
      this.current_month_global = date.getMonth();
      let current_month = this.monthNames[date.getMonth()];
      this.current_year_global = date.getFullYear();
      let current_year = date.getFullYear();

      this.current_date = `The ${current_day} of ${current_month} ${current_year}`


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

.swipe {
   height: 100%;
   justify-content: center;
   align-items: center;
   display: flex;

   width: 10%;

   transition: 0.4s;

   color: white;
}

.swipe:hover {
   background-color: rgba(255, 255, 255, 0.4);
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

   transition: 1s;
   height: 100%;
}

.days_container {
   width: 100%;
   height: 15%;
   /* height: 100%; */
}

.temp_container {
   height: 100%;
}

.week p {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100%;

   color: white;
   font-size: 17px;
}

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

   cursor: pointer;
}

.active_month_day {
   border-radius: 2px solid rgba(0, 0, 0, 1);
}

.week p:hover{
   cursor: pointer;
}

.day-cart {
   transition: 0.4s;
}

.week p:hover ~ .day-cart {
   /* height: 80vh; */
   color: blue;
}

.showenWeek::before {
   height: 100%;
   transition: 0.4s;
}

.showenWeek {
   height: 70vh !important;
}
</style>