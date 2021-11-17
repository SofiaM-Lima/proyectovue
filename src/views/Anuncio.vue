<template>
  <v-row>
    <v-col md="6">
      <!--Aqui empeiza el carrousel-->
      <v-container>
        
        <v-carousel style="margin-top: 15%">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </v-container>
      <h1 align="center" class="hidden-md-and-down">DESCRIPCION</h1>
    </v-col>

    <v-col md="6" style="margin-top: 15%">
      <v-container>
        <h2 align="center">
          Iphone 6 pantalla de 8 pulgadas, 64 Gb internos, 2 Gb de Ram, Solo
          banda Tigo nuevo.
        </h2>
        <br />
        <h1 align="center">$235</h1>
        <br />
        <div class="text-center">
          <v-btn class="ma-2" outlined color="red"> Comprar </v-btn>
        </div>
        <br />
        <p align="center">Vendedor: Juan Perez</p>
        <p align="center">Telefono: 7374-3543</p>
      </v-container>
    </v-col>
    
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
        md="6"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
           <p><b>Nuevo:</b> Nuevo</p>
          <p><b>Marca:</b> Iphone</p>
          <p><b>Modelo:</b> 6 Plus</p>
          <p><b>Pantalla:</b> 7 Pulgadas</p>
          <p><b>Sistema:</b> Ios</p>
          <p><b>Rom:</b> 64 GB</p>
          <p><b>Ram:</b> 2 GB</p>
        </v-card>
      </v-col>
      <v-col
        cols="6"
        md="6"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
           <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium velit, commodi voluptatem debitis eos magni sequi
              minima accusamus esse ut fuga obcaecati laborum. Sapiente atque
              veritatis voluptatum distinctio minus sint! Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
            </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://www.altonivel.com.mx/wp-content/uploads/2019/01/celulares-2019.jpg",
        },
        {
          src: "https://www.thegamertemple.com/wp-content/uploads/2019/08/lgdgalaxyf3-4d03c24b6dd28d0395ea137660df617a-600x400.jpg",
        },
        {
          src: "https://cdn.forbes.co/2020/11/Xiaomi-1280x720-JPG.jpg",
        },
        {
          src: "https://www.altonivel.com.mx/wp-content/uploads/2018/06/mejores-celulares-2018.jpg",
        },
      ],
    };
  },
};
</script>