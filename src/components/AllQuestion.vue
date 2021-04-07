<template>
  <div>
    <div class="grid-c-7">
      <table style="width:100%">
        <tr>
          <th>id pregunta</th>
          <th>Fecha de creacion</th>
          <th>Modulo</th>
          <th>Categoría</th>
          <th>Pregunta</th>
          <th>Respuesta</th>
          <th>Acciones</th>
        </tr>
        <tr v-for="question in questions"  :key="question.id">
          <td>{{question.id}}</td>
          <td>{{question.id}}</td>
          <td>{{question.id}}</td>
          <td>{{question.id}}</td>
          <td>{{question.id}}</td>
          <td>{{question.id}}</td>
          <td>
            <div class="actions">
              <div class="show"></div>
              <div class="edit"></div>
              <div class="delete"></div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

</style>
