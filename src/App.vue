<template>
  <main-page/>
</template>

<script>
import mainPage from "./components/main-page.vue"

export default {
  name: 'App',
  components: { 
    mainPage
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--main-background);
  }
</style>
