<template>
  <v-row>
    <v-col md="6">
      <!--Aqui empeiza el carrousel-->
      <v-container>
        <v-carousel style="margin-top: 6%">
          <v-carousel-item
            v-for="(img, i) in anuncio.imagen"
            :key="i"
            :src="img"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </v-container>
      <h1 align="center" class="hidden-md-and-down">DESCRIPCION</h1>
    </v-col>

    <v-col md="6" style="margin-top: 10%">
      <v-container>
        <h2 align="center">
          {{ anuncio.titulo }}
        </h2>
        <br />
        <h1 align="center">${{ anuncio.precio }}</h1>
        <br />
        <div class="text-center">
          <v-btn
            class="ma-2"
            outlined
            color="red"
            @click="agregarCarrito(anuncio)"
          >
            Comprar
          </v-btn>
        </div>
        <br />
        <p align="center">Vendedor: {{ anuncio.vendedor }}</p>
        <p align="center">Telefono: {{ anuncio.telefono }}</p>
      </v-container>
    </v-col>

    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="6">
          <v-card class="pa-2" outlined tile>
            <p>
              <b><v-icon>mdi-robot-confused-outline</v-icon> Estado:</b>
              {{ anuncio.estado }}
            </p>
            <p>
              <b><v-icon>mdi-cellphone-marker</v-icon> Marca:</b>
              {{ anuncio.marca }}
            </p>
            <p>
              <b><v-icon>mdi-globe-model</v-icon> Modelo:</b>
              {{ anuncio.modelo }}
            </p>
            <p>
              <b><v-icon>mdi-cellphone-screenshot</v-icon> Pantalla</b>
              {{ anuncio.pantalla }}
            </p>
            <p>
              <b><v-icon>mdi-android</v-icon> Sistema:</b> {{ anuncio.sistema }}
            </p>
            <p>
              <b><v-icon>mdi-database-marker</v-icon> Rom:</b> {{ anuncio.rom }}
            </p>
            <p>
              <b><v-icon>mdi-database-marker-outline</v-icon> Ram:</b>
              {{ anuncio.ram }}
            </p>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="pa-2" outlined tile>
            <p>
              {{ anuncio.descripcion }}
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>

<script>
import { db } from "../db";
export default {
  data() {
    return {
      anuncio: {},
    };
  },
  methods: {
    async traerAnuncio() {
      try {
        var res = await db
          .collection("anuncio")
          .doc(this.$route.params.id)
          //.doc("zXWs4nY7YZal7vwe7Ye9")

          .get();
        this.anuncio = await res.data();
      } catch (error) {
        console.log(error);
      }
    },
    agregarCarrito(anuncio) {
      this.$store.commit("agregarCarrito", anuncio);
    },
  },
  created() {
    this.traerAnuncio();
  },
};
</script>
