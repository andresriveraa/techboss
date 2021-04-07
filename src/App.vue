<template id="app">
  <div class="grid-2">
    <navbar id="Nav" />
    <div class="w">
      <h1 class="mainTitle">Centro de ayuda Seif</h1>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import './assets/css/global.scss';

.mainTitle {
  height: 100px;
  padding: 16px;
  text-align: center;
}

#app {
  height: 100vh;
}
</style>
