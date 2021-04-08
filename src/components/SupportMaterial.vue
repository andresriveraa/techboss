<template>
  <div>
    <div class="route">
      <p>{{actualUrl}}</p>
    </div>
    <form>
      <div class="">
        <div>
          <label for="productos">Productos</label>
          <select v-model="product" name="" id="productos">
            <option value="empty">Seleccione el producto</option>
          </select>
        </div>
        <div>
          <label for="module">Modulo</label>
          <select name="" id="module">
            <option value="empty">Seleccione el producto</option>
          </select>
        </div>
        <div>
          <label for="category">Categoría</label>
          <select name="" id="category">
            <option value="empty">Seleccione el producto</option>
          </select>
        </div>
        <div>
          <label for="entorno">Entorno</label>
          <select name="" id="entorno">
            <option value="empty">Seleccione el producto</option>
          </select>
        </div>
      </div>

      <div class="ask">
        <label for="title">Pregunta</label>
        <input type="text" name="" id="title">
      </div>

      <div class="respuesta">
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div class="btn--main" @click.prevent="addQuestion">
        <p>Añadir</p>
      </div>
      <div class="btn--second">
        <p>Cancelar</p>
      </div>
    </form>
    <module-success />
  </div>
</template>

<script>
import ModuleSuccess from './ModuleSuccess.vue';

export default {
  components: {
    ModuleSuccess,
  },
  data() {
    return {
      product: '',
      actualUrl: 'main_view > Add material support',
    };
  },
  methods: {
    showHideModal() {
      this.$store.commit('modal/showModal');
    },
    addQuestion() {
      this.showHideModal();
      console.log(this.product);
      setTimeout(() => {
        this.showHideModal();
      }, 1500);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
