<template>
  <div id="app">
    <div>
      <Menus></Menus>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menus from './common/Menus'
export default {
  name: 'App',
  components: {
    Menus
  }
}
</script>

<style>
a {
  text-decoration: none;
}
body {
  background: black;
}
</style>
