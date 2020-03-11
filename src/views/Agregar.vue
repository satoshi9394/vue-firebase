<template>
  <div>
    <h1>Agregar</h1>
    <form @submit.prevent="agregarTarea(name)">
      <input type="text" v-model="name">
      <button type="submit">Agregar</button>
    </form>
    {{name}}
  </div>
</template>


<script>
import { mapActions } from 'vuex'

export default {
  name: 'Agregar',
  data() {
    return {
      name: ''
    }
  },

  methods: {
    ...mapActions(['agregarTarea'])
  },


}
</script>