<template>
  <div class="cardProduct">
    <figure><img :src="product.urlImage"
    :alt="product.name"
    width="80"></figure>
    <h4>{{product.name}}</h4>
    <div class="btn">
      <a :href="product.url" target="_blank">Ver</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    product: {
      type: Object,
      default: () => ({
        id: 1,
        name: 'Seif',
        url: 'https://www.andresrivera.com.co',
        module: 'module',
        Category: 'category',
        Entorno: 'entorno',
      }),
    },
  },
};
</script>

<style scoped lang="scss">
@import '../assets/css/global.scss';

.cardProduct {
  cursor: pointer;
  height: 250px;
  width: 200px;
  @include center;
  border: 1px solid var(--accent);
  margin: 16px;
  border-radius: 10px;
  transition: 500ms;
}

.cardProduct:hover {
  box-shadow: 1px 1px 13px gray;
}
</style>
