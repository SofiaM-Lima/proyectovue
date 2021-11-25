<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        sm="3"
        class="d-sm-none d-md-flex d-none d-sm-flex"
      >
        <div>
          <div v-for="estado in estados" :key="estado">
            <v-switch
              class="strech"
              v-model="estadoSelect"
              :label="estado"
              :value="estado"
            ></v-switch>
          </div>
          <fieldset>
            <legend>Marca</legend>
            <form action="#">
              <p>
                <label v-for="marca in marcas" :key="marca">
                  <input
                    type="checkbox"
                    v-model="marcaSelect"
                    :label="marca"
                    :value="marca"
                  />
                  <span> Samsung <sup>15</sup></span>
                </label>
              </p>
              <!--   <p>
                  <label>
                    <input type="checkbox" class="filled-in checkbox-blue" />
                    <span> Huawei <sup>10</sup></span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" class="filled-in checkbox-blue" />
                    <span> Nokia <sup>56</sup></span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" class="filled-in checkbox-blue" />
                    <span> Iphone <sup>4</sup></span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" class="filled-in checkbox-blue" />
                    <span> Xiaomi <sup>4</sup></span>
                  </label>
                </p> -->
            </form>
          </fieldset>
          <fieldset>
            <legend>Sistema</legend>
            <form action="#">
              <p>
                <label v-for="sistema in sistemas" :key="sistema">
                  <input
                    type="checkbox"
                    v-model="sistemaSelect"
                    :label="sistema"
                    :value="sistema"
                  />
                  <span> Android <sup>15</sup></span>
                </label>
              </p>
              <!-- <p>
                  <label>
                    <input type="checkbox" class="filled-in checkbox-blue" />
                    <span> Windows <sup>10</sup></span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" class="filled-in checkbox-blue" />
                    <span> Ios <sup>56</sup></span>
                  </label>
                </p> -->
            </form>
          </fieldset>
          <fieldset>
            <legend>Pantalla</legend>
            <form action="#">
              <p>
                <label v-for="pantalla in pantallas" :key="pantalla">
                  <input
                    type="checkbox"
                    v-model="pantallaSelect"
                    :label="pantalla"
                    :value="pantalla"
                  />
                  <span> 6.0</span>
                </label>
              </p>
              <!--   <p>
                  <label>
                    <input type="checkbox" class="filled-in checkbox-blue" />
                    <span> 5.5</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" class="filled-in checkbox-blue" />
                    <span> 5.0</span>
                  </label>
                </p> -->
            </form>
          </fieldset>
        </div>
      </v-col>
      <v-col cols="12" sm="9" >
        <v-row v-if="!anuncio.length"> </v-row>
        <v-data-iterator
          no-data-text="Ningún telefono con esa descripción."
          v-if="anuncio.length"
          :items="anuncioFiltrado"
          :search="busqueda"
          :sort-by="sortBy"
          :items-per-page.sync="itemsPerPage"
          hide-default-footer
          :page.sync="page"
          :sort-desc="sortDesc"
        >
          <template v-slot:header>
            <v-toolbar dark color="blue darken-3" class="mb-1" cols="12" sm="9">
              <v-text-field
                v-model="busqueda"
                clearable
                flat
                solo-inverted
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="Search"
              ></v-text-field>
              <template v-if="$vuetify.breakpoint.mdAndUp">
                <v-spacer></v-spacer>
                <v-select
                  v-model="sortBy"
                  flat
                  solo-inverted
                  hide-details
                  :items="parametro"
                  item-text="texto"
                  item-value="parametro"
                  prepend-inner-icon="mdi-magnify"
                  label="Ordenar por:"
                ></v-select>
                <v-spacer></v-spacer>
                <v-btn-toggle v-model="sortDesc" mandatory>
                  <v-btn large depressed color="blue" :value="false">
                    <v-icon>mdi-arrow-up</v-icon>
                  </v-btn>
                  <v-btn large depressed color="blue" :value="true">
                    <v-icon>mdi-arrow-down</v-icon>
                  </v-btn>
                </v-btn-toggle>
              </template>
            </v-toolbar>
          </template>
          <template v-slot:default="props">
            <v-row>
              <v-col
                v-for="(item, index) in props.items"
                :key="index"
                cols="6"
                sm="3"
              >
                <v-card
                  :data-mult="index % 3"
                  class="mx-auto my-3"
                  elevation="8"
                >
                  <v-img height="250" :src="item.imagen[0]">
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey darken-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                  <v-card-title class="pt-3 pb-0">
                    <div v-if="item.titulo.length < 20">
                      {{ item.titulo }}
                    </div>
                    <div v-else>
                      {{ item.titulo.substring(0, 20) + ".." }}
                    </div>
                  </v-card-title>
                  <v-card-subtitle class="pb-0">
                    {{ item.marca }}
                  </v-card-subtitle>
                  <v-card-text class="text--primary">
                    <div>${{ item.precio }}</div>
                    <div class="text-truncate">
                      {{ item.descripcion }}
                    </div>
                    <div>{{ item.pantalla }}</div>
                    <div>{{ item.modelo }}</div>
                    <div>{{ item.telefono }}</div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn :to="'/carrito/'" color="orange" text
                      ><v-icon>mdi-cart-outline</v-icon> Agregar al carro
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </template>
          <template v-slot:footer>
            <v-row class="mt-2" align="center" justify="center">
              <span class="grey--text">Items por página</span>
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    dark
                    text
                    color="primary"
                    class="ml-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    {{ itemsPerPage }}
                    <v-icon>mdi-chevron-down</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(number, index) in itemsPerPageArray"
                    :key="index"
                    @click="updateItemsPerPage(number)"
                  >
                    <v-list-item-title>{{ number }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>

              <v-spacer></v-spacer>

              <span class="mr-4 grey--text">
                Página {{ page }} de {{ numberOfPages }}
              </span>
              <v-btn
                fab
                dark
                color="blue darken-3"
                class="mr-1"
                @click="formerPage"
              >
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn
                fab
                dark
                color="blue darken-3"
                class="ml-1"
                @click="nextPage"
              >
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-row>
          </template>
        </v-data-iterator>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db } from "../db";
export default {
  data() {
    return {
      anuncio: [],
      page: 1,
      itemsPerPage: 8,
      itemsPerPageArray: [4, 8, 12, 14, 18, 20],
      sortBy: [],
      busqueda: "",
      estados: ["Nuevo", "Usado"],
      estadoSelect: [],
      marcas: ["Samsung", "Huawei", "Nokia", "Iphone", "Xiaomi"],
      marcaSelect: [],
      sistemas: ["Android", "Windows", "Ios"],
      sistemaSelect: [],
      pantallas: ["5", "5.5", "6"],
      pantallaSelect: [],
      sortDesc: true,
      parametro: [
        { texto: "Titulo", parametro: "titulo" },
        { texto: "Precio", parametro: "precio" },
      ],
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.anuncio.length / this.itemsPerPage);
    },
    marcasFiltrado(){
        if (this.marcaSelect.length) return this.marcaSelect;
        else return this.marcas;
    },
      estadosFiltrado(){
        if (this.estadoSelect.length) return this.estadoSelect;
        else return this.estados;
    },
      sistemaFiltrado(){
        if (this.sistemaSelect.length) return this.sistemaSelect;
        else return this.sistemas;
    },
      pantallaFiltrado(){
        if (this.pantallaSelect.length) return this.pantallaSelect;
        else return this.pantallas;
    },

    anuncioFiltrado(){
        return this.anuncio.filter((v) => {
            if (!this.marcasFiltrado.includes(v.marca)) return false;
            if (!this.estadosFiltrado.includes(v.estado)) return false;
            if (!this.sistemaFiltrado.includes(v.sistema)) return false;
            if (!this.pantallaFiltrado.includes(v.pantalla)) return false;
        })
    }
  },
  name: "About",
  firestore: {
    anuncio: db.collection("anuncio"),
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    filtrarPor(parametro) {
      if (this.busqueda == parametro) this.busqueda = "";
      else this.busqueda = parametro;
    },
  },
};
</script>