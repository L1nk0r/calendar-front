<template>
   <div 
      class="cart red active_month"
      v-if="isToday()">
      <div class="header">{{ dayData.date.day }}</div>
   </div>  

   <div 
      class="cart active_month"
      v-else-if="dayData.date.month === this.today.getMonth()">
      <div class="header">{{ dayData.date.day }}</div>
   </div>   

   <div 
      class="cart another_month"
      v-else>
      <div class="header">{{ dayData.date.day }}</div>
      <!-- <div class="meeting"></div> -->
   </div>   
</template>

<script>
export default{
   name: 'dayCart',
   data() {
      return {
         today: null,
      }
   },
   props: {
      dayData: {
         type: Object,
         default: () => {}
      }
   },
   components: { },
   methods: {
      isToday(){
         if ((this.today.getDate() === this.dayData.date.day) && (this.today.getMonth() === this.dayData.date.month) && (this.today.getFullYear() === this.dayData.date.year)) {
            return true
         } else {
            return false
         }
      }
   },
   computed: { },
   mounted() { },
   created() {
      this.today = new Date();
   } 
}
</script>

<style>
.cart {
   padding: 5px;
   margin: 5px;
   border-radius: 3px;

   font-size: 23px;
   font-family: 'Bungee', cursive;

   transition: 0.4s;
}

.cart:hover {
   transform: scale(1.1);
}

.cart .header{
   text-align: right;
}

.active_month {
   border: 1px solid black;
   transition: 0.4s;

   background-color: var(--active-days-background);

   cursor: pointer;
   color: rgba(255, 255, 255, 0.7);
}

.active_month:hover {
   background-color: rgb(73, 92, 171);
   color: rgba(255, 255, 255, 0.9)
}

.red {
   border: 2px solid red;
}

/* .red:hover {
   background-color: rgba(0, 0, 255, 0.4);
} */

.another_month {
   border: 1px solid rgba(0, 0, 0, 0.2);
   background-color: var(--not-active-days-background);
   color: rgba(255, 255, 255, 0.3);
}

.meeting {
   width: 100%;
   height: 8px;
   border-radius: 2px;
   background-color: blueviolet;
}
</style>
