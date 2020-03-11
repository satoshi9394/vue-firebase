<template>
  <div>
    <h1>Lista de tareas</h1>
    <router-link :to="{ name: 'agregar' }" >
      <button>Agregar Tarea</button>
    </router-link>
    <ul>
      <li v-for="item of tareas" :key="item.id">
        {{item.id}} - {{item.name}}
        <router-link :to="{name: 'editar', params: { id: item.id }}">
          <button>Editar</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Inicio',
  //importar action desde la store de vuex
  methods: {
    ...mapActions(['getTareas'])
  },
  //ejecutarlo desde la creacion del dom
  created() {
    this.getTareas()
  },

  computed: {
    ...mapState(['tareas'])
  },
}
</script>