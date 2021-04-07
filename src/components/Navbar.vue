<template >
  <div >
    <div class="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <!-- <router-link to="/AskModules">Preguntas</router-link> -->
      <router-link to="/support">Material apoyo</router-link>
      <router-link to="/question">Preguntas</router-link>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
@import '../assets/css/global.scss';

.menu {
  @include center;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  a {
    margin: 16px 0;
  }
}
</style>
