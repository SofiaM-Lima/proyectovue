<template>
  <div>
    <v-card max-width="200px">
      <router-link
        :to="{ name: 'Anuncio', params: { id: anuncio.id } }"
        class="text-decoration-none"
      >
        <v-img height="200px" :src="anuncio.imagen[0]" />
      </router-link>
      <v-card-subtitle class="pb-0"> {{ anuncio.marca }} </v-card-subtitle>
      <v-card-text class="text--primary">
        <div>${{ anuncio.precio }}</div>
        <div class="text-truncate">
          {{ anuncio.descripcion }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="orange" text @click="agregarCarrito(anuncio)">
          <v-icon>mdi-cart-outline</v-icon> Comprar
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "cards",
  props: ["anuncio"],
  methods: {
    agregarCarrito(anuncio) {
      this.$store.commit("agregarCarrito", anuncio);
    },
  },
};
</script>
