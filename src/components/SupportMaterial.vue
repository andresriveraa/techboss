<template>
  <div>
    <div class="route">
      <p>{{actualUrl}}</p>
    </div>
    <form>
      <div class="">
        <div>
          <label for="productos">Productos</label>
          <select name="" id="productos">
            <option value=""></option>
          </select>
        </div>
        <div>
          <label for="module">Modulo</label>
          <select name="" id="module">
            <option value=""></option>
          </select>
        </div>
        <div>
          <label for="category">Categoría</label>
          <select name="" id="category">
            <option value=""></option>
          </select>
        </div>
        <div>
          <label for="entorno">Entorno</label>
          <select name="" id="entorno">
            <option value=""></option>
          </select>
        </div>
      </div>

      <div class="ask">
        <input type="text" name="" id="">
      </div>

      <div class="respuesta">
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div class="btn--main">
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

export default {
  data() {
    return {
      actualUrl: 'main_view > Add material support',
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
