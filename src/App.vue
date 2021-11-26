<template>
  <v-app>
    <modal ref="modal" ></modal>
    <v-app-bar app color="red darken-1" dark hide-on-scroll dense>
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="d-flex d-md-none"
      ></v-app-bar-nav-icon>
      <div class="hidden-sm-and-down ml-5 mr-4">
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer; align-item: center; display: flex"
        >
          <v-icon large color="black"> mdi-cellphone</v-icon>
          <span class="display-1"> CellPhone</span>
        </router-link>
      </div>
      <v-text-field
        v-model="search"
        placeholder="Buscar"
        clearable
        hide-details
        outlined
        rounded
        filled
        dense
        color="white"
      >
      </v-text-field>
      <v-btn :ripple="false" icon
        ><v-icon large color="black"> mdi-magnify</v-icon></v-btn
      >
      <v-btn-toggle title group>
        <v-btn :ripple="false" to="/" class="d-none d-md-flex">Inicio</v-btn>
        <v-btn :ripple="false" to="/estadisticas" class="d-none d-md-flex"
          >Estadisticas</v-btn >
        <v-btn class="icon, hidden-md-and-down" :ripple="false" @click="abrirModal">     
            <v-icon large color="black"> mdi-plus-circle-outline </v-icon>       
        </v-btn>
        <v-btn class="icon" :ripple="false" to="/carrito">
          <v-badge color="white">
            <v-icon large color="black"> mdi-cart-outline </v-icon>
          </v-badge>
        </v-btn>
      </v-btn-toggle>
      <!-- <CrearAnuncio class="ml-2" /> -->
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary dark>
      <div class="text-center mt-3">
        <router-link to="/" tag="span" style="cursor: pointer">
          <v-icon large color="red"> mdi-cellphone</v-icon>
          <h1 class="display-1 white--text">CellPhone</h1>
        </router-link>
      </div>

      <v-list>
        <v-list-item-group>
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon large color="red"> mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>Inicio</v-list-item-content>
          </v-list-item>
          <v-list-item to="/estadisticas">
            <v-list-item-icon>
              <v-icon large color="red"> mdi-poll</v-icon>
            </v-list-item-icon>
            <v-list-item-content>Estadisticas</v-list-item-content>
          </v-list-item>
          <v-list-item @click="abrirModal">
            <v-list-item-icon>
              <v-icon large color="red"> mdi-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-content>Nuevo Anuncio</v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
    <router-view />
    </v-main>
  </v-app>
</template>

<script>
import modal from "./components/modal.vue"
export default {
  components: {
    modal,
  },
  name: "App",

  data: () => ({
    drawer: false,
    search: "",
    dialog: false,
    nav: [
      {
        icon: "home",
        text: "Home",
        title: "Back to Home page",
        active: true,
      },
      {
        icon: "assignment_turned_in",
        text: "Todos",
        title: "Some stuff that needs doing",
        active: false,
      },
    ],
  }),
  methods: {
    abrirModal() {
      this.$refs.modal.dialog = true;
    },
  },
};
</script>
