<template>
  <div>
    <div class="route">
      <p>{{actualUrl}}</p>
    </div>
    <div class="search">
      <search />
      <div class="btn">
        <p>Exportar</p>
      </div>
    </div>
    <div class="btn--main">
      <p>Añadir filtro</p>
    </div>
  </div>
</template>

<script>
import Search from './Search.vue';

export default {
  data() {
    return {
      Search,
      actualUrl: 'vista principal > seif > preguntas modulos',
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
