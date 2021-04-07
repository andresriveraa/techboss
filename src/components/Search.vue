<template>
  <div>
    <input type="text" name="" id="Search" v-model="search" >
    <div class="btn">
      <p>Filtrar</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    };
  },
  watch: {
    search(newValue) {
      console.log(newValue);
    },
  },
  methods: {
    filter() {
      console.log(this.search);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
