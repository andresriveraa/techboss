<template>
  <div class="home">
    <transition name="slide-fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
// import Products from '@/components/Products.vue';

export default {
  name: 'Home',
  components: {
    // Products,
  },
};
</script>

<style lang="scss" >
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>
