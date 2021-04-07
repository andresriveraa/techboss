<template>
  <div class="home">
    <router-view v-slot="{ Component }">
      <transition name="slide-fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <module-success/>
</template>

<script>
import ModuleSuccess from '../components/ModuleSuccess.vue';

export default {
  name: 'Home',
  components: {
    ModuleSuccess,
  },
};
</script>

<style lang="scss" >
.slide-fade-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transition: all 0.2s ease-out;
  transform: translateX(20px);
  opacity: 0;
}

</style>
