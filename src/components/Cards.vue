<template>
  <div>
    <v-card max-width="200px">
      <router-link
        :to="{ name: 'Anuncio', params: { id: anuncio.id } }"
        class="text-decoration-none "
      >
      <v-img
        height="180px"
        :src="anuncio.imagen [0]"
      />
      </router-link>
      <v-card-subtitle class="pb-0"> {{anuncio.marca}} </v-card-subtitle>
      <v-card-text class="text--primary ">
        <div>${{anuncio.precio}}</div>
        <div class="text-truncate" >
          {{anuncio.descripcion}}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn :to="'/carrito/'" color="orange" text><v-icon>mdi-cart-outline</v-icon> Agregar al carro </v-btn>
      </v-card-actions>
    </v-card>
  </div>
  
</template>
<script >
export default {
    name: "cards",
    props: ["anuncio"],
    
}
</script>