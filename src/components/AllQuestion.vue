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
        <tr v-for="question in questionList"  :key="question.id">
          <td>{{question.id}}</td>
          <td>{{question.fecha}}</td>
          <td>{{question.modulo}}</td>
          <td>{{question.categoria}}</td>
          <td>{{question.pregunta}}</td>
          <td>{{question.respuesta}}</td>
          <td>
            <div class="actions">
              <div class="show">mostrar</div>
              <div class="edit">edit</div>
              <div class="delete">delete</div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {

  async created() {
    this.$store.dispatch('question/getData');
  },

  computed: {
    ...mapState('question', ['questionList']),
  },
};
</script>

<style lang="scss" scoped>
th {
  height: 48px;
}
td {
  text-align: center;
  height: 80px;
}

.show, .delete, .edit {
  cursor: pointer;
  text-decoration: underline;
}
</style>
