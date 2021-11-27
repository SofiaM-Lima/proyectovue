import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carrito: [],
  },
  mutations: {
    agregarCarrito(state, articulo) {
      state.carrito.push(articulo);
    },
    eliminarCarrito(state, index) {
      state.carrito.splice(index, 1);
    },
  },
  getters: {
    calcularCosto(state) {
      let total = 0;
      state.carrito.forEach((articulo) => {
        total += Number(articulo.precio);
      });
      return total;
    },
    numeroAnuncios(state) {
      return state.carrito.length;
    },
  },
});
