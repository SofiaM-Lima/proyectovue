<template>
  <div style="margin-top: 8%">
    <v-container>
      <v-row no-gutters v-for="(articulo, index) in carrito" :key="index">
        <v-col>
          <v-card class="pa-2" outlined tile color="transparent">
            <v-img
              max-height="100"
              max-width="350"
              :src="articulo.imagen[0]"
            >
            </v-img>
          </v-card>
        </v-col>
        <v-col order="12">
          <v-card class="pa-2" outlined tile color="transparent">
            <v-row
              align="center"
              justify="space-around"
              style="margin-top: 10%"
            >
              <v-btn depressed color="green" @click="eliminarCarrito(index)"> Comprar </v-btn>
            </v-row>
          </v-card>
        </v-col>
        <v-col order="1">
          <v-card class="pa-2" outlined tile color="transparent">
            <v-card-text>
              <p align="center">{{articulo.marca}}</p>
              <p align="center">Precio: ${{articulo.precio}}</p>
              <p align="center">vendedor: {{articulo.vendedor}}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
  computed: {
    ...mapState(["carrito"]),
    ...mapGetters(["calcularCosto"]),
  },
  methods: {
    eliminarCarrito(index) {
      this.$store.commit("eliminarCarrito", index);
    },
  },
};
</script>
