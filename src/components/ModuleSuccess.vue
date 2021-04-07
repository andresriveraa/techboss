<template>
  <div class="module" v-if="show">
    <div class="module--message">
      <figure>
        <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F3b%2FCheck_icon.svg%2F600px-Check_icon.svg.png&f=1&nofb=1"
        alt=""
        width="150"
        >
      </figure>
      <p>{{message}}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    message: {
      type: String,
      default: 'Pregunta creada',
    },
  },
  computed: {
    ...mapState('modal', ['show']),
  },

};
</script>

<style lang="scss" scoped>
@import '../assets/css/global.scss';

.module {
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(220, 220, 220, 0.712);
  /* background-color: red; */
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  @include center;

  &--message {
    background-color: white;
    height: 400px;
    width: 400px;
    @include center;
    flex-direction: column;
    border-radius: 18px;
    p {
      margin-top: 24px;
      font-size: 24px;
    }
  }
}
</style>
