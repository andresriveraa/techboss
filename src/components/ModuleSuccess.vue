<template>
  <div>
    <figure><img src="" alt=""></figure>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: 'Pregunta creada',
    },
  },

};
</script>

<style lang="scss" scoped>

</style>
