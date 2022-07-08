<template>
   <div 
      class="cart red active_month"
      v-if="dayData.date.day === this.today.getDate()">
      {{ dayData.date.day }}
   </div>  

   <div 
      class="cart active_month"
      v-else-if="dayData.date.month === this.today.getMonth()">
      {{ dayData.date.day }}
   </div>   

   <div 
      class="cart another_month"
      v-else>
      {{ dayData.date.day }}
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
   methods: { },
   computed: { },
   mounted() {
      
      /* if ((this.today.getDate() === this.dayData.date.day) && (this.today.getDate() === this.dayData.date.day) && (this.today.getDate() === this.dayData.date.day)) {
         
      } */
   },
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
}

.active_month {
   border: 1px solid black;
   transition: 0.4s;
}

.active_month:hover {
   background-color: rgba(0, 0, 0, 0.2);
}

.red {
   border: 2px solid red;
}

.another_month {border: 1px solid rgba(0, 0, 0, 0.2);
   background-color: rgba(0, 0, 0, 0.1);
}
</style>
