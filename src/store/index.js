import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'

//importanto router
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: [],
    tarea: [{nombre: '', id: ''}]
  },
  //ejecuta una funcion para que luego las action puedan implementarlas en su commit
  mutations: {

    setTareas(state, tareas) {
      state.tareas = tareas
    },

    setTarea(state, tarea) {
      state.tarea = tarea
    },

    eliminarTarea(state, id) {
      state.tareas = state.tareas.filter( t => {
        return t.id != id
      })
    }
  },

  //invoca una ejecucion pero no si antes no llama al commit que viene desde las mutations
  actions: {
    getTareas ({commit}) {
      const tareas = []
      db.collection('tareas').get()
      .then(snapshot => {
        snapshot.forEach( doc => {
          //console.log(doc.id);
          //console.log(doc.data());
          let tarea = doc.data()
          tarea.id = doc.id
          tareas.push(tarea)
        })
      })
      //cambio la state local
      commit('setTareas', tareas)
    },

    getTarea ({commit}, id) {
      db.collection('tareas').doc(id).get()
      .then( doc => {
        let tarea = doc.data()
        tarea.id = doc.id
        commit('setTarea', tarea)
      })
    },

    editarTarea({commit}, tarea) {
      db.collection('tareas').doc(tarea.id).update({
        name: tarea.name
      })
      .then( ()=> {
        router.push({name: 'inicio'})
      })
    },

    agregarTarea({commit}, name) {
      db.collection('tareas').add({
        name: name
      })
      .then( () => {
        router.push({name: 'inicio'})
      })
    },

    eliminarTarea({commit, dispatch}, id) {
      db.collection('tareas').doc(id).delete()
      .then( () => {
        console.log(`tarea fue eliminada`)
        //dispatch('getTareas') no tan elegante pero funciona de llamar a una accion
        commit('eliminarTarea', id)
      })
    },
  },
  modules: {
  }
})
