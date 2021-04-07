<template>
  <div>
    <div class="add">
      <router-link class="btn" to="/support">
          Añadir material de apoyo
      </router-link>
    </div>
    <h1>Nuestros Productos</h1>
    <div class="products grid-3">
      <div class="product" v-for="product in productsList" :key="product.id">
        <card-product :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import CardProduct from '@/components/CardProduct.vue';
import { mapState } from 'vuex';

export default {
  created() {
    this.$store.dispatch('question/getData', 'hello');
  },
  components: {
    CardProduct,
  },
  computed: {
    ...mapState('products', ['productsList']),
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/css/global.scss';
.product {
  @include center;
}

h1 {
  margin-top: 40px;
  text-align: center;
}
.add {
  width: 100%;
  height: 80px;
  text-align: center;
  @include center;

  .btn {
    width: 30%;
  }
}

</style>
