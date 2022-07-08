<template>
   <div 
      class="cart red"
      v-if="dayData.date.day === this.today.getDate()">
      {{ dayData.date.day }}
   </div>  

   <div 
      class="cart"
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
   border: 1px solid black;
   padding: 5px;
   margin: 5px;
   border-radius: 3px;

   transition: 0.4s;
}

.cart:hover {
   background-color: rgba(0, 0, 0, 0.2);
}

.red {
   border: 2px solid red;
}
</style>
