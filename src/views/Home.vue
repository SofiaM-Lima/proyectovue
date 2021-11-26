<template>
  <div>
    <!--Modal para lo del boton de celular-->
    <div class="hidden-md-and-up" style="margin-top: 15%">
      <v-row justify="center">
        <!--<div class="text-subtitle-2">Ordenar por:</div>-->
        <v-btn color="blue-grey lighten-4" small style="margin-right: 3%">
          <v-icon>mdi-arrow-up</v-icon>Precio
        </v-btn>

        <v-btn color="grey darken-3" dark @click.stop="dialog = true">
          <v-icon color="red">mdi-filter</v-icon>
        </v-btn>
        <v-dialog v-model="dialog" max-width="200px">
          <v-card>
            <legend>Marca</legend>
            <form action="#">
              <p>
                <label>
                  <input type="checkbox" class="filled-in checkbox-blue" />
                  <span> Samsung <sup>15</sup></span>
                </label>
              </p>
              <p>
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
              </p>
            </form>
            <legend>Sistema</legend>
            <form action="#">
              <p>
                <label>
                  <input type="checkbox" class="filled-in checkbox-blue" />
                  <span> Android <sup>15</sup></span>
                </label>
              </p>
              <p>
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
              </p>
            </form>
            <legend>Pantalla</legend>
            <form action="#">
              <p>
                <label>
                  <input type="checkbox" class="filled-in checkbox-blue" />
                  <span> 6.0</span>
                </label>
              </p>
              <p>
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
              </p>
            </form>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" text @click="dialog = false"> OK </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>

    <!--Aqui se procede hacer el menu que lleva sistema,pantalla,marca, este es para computadora-->

    <v-container>
      <v-row>
        <v-col col="3" md="3" class="hidden-md-and-down" style="margin-top: 4%">
          <div>
            <v-container fluid>
              <fieldset>
                <legend>Estado</legend>
                <form action="#">
                  <v-radio-group v-model="estadoChange" column>
                    <v-radio
                      label="Nuevo"
                      value="nuevo"
                      @click="cambio"
                    ></v-radio>
                    <v-radio
                      label="Usado"
                      value="usado"
                      @click="cambio"
                    ></v-radio>
                    <v-radio
                      label="Ambos"
                      value="ambos"
                      @click="cambio"
                    ></v-radio>
                  </v-radio-group>
                </form>
              </fieldset>
              <fieldset>
                <legend>Marca</legend>
                <form action="#">
                  <div v-for="marca in marcas" :key="marca">
                    <v-checkbox
                      class="strech"
                      v-model="marcasSelected"
                      :label="marca"
                      :value="marca"
                      dense
                      @click="AnunciosFiltrados"
                    />
                  </div>
                </form>
              </fieldset>
              <fieldset>
                <legend>Sistema</legend>
                <form action="#">
                  <div v-for="sistema in sistemas" :key="sistema">
                    <v-checkbox
                      class="strech"
                      v-model="sistemasSelected"
                      :label="sistema"
                      :value="sistema"
                      dense
                    />
                  </div>
                </form>
              </fieldset>
              <fieldset>
                <legend>Pantalla</legend>
                <form action="#">
                  <div v-for="pantalla in pantallas" :key="pantalla">
                    <v-checkbox
                      class="strech"
                      v-model="pantallasSelected"
                      :label="pantalla"
                      :value="pantalla"
                      dense
                    />
                  </div>
                </form>
              </fieldset>
            </v-container>
          </div>
        </v-col>

        <!--Aqui se empiezan con las card esta es la primera-->
        <v-col col="12" lg="9" style="margin-top: 6%">
          <v-row>
            <v-col
              cols="6"
              xs="6"
              sm="4"
              md="4"
              lg="3"
              xl="2"
              v-for="i in AnunciosFiltrados"
              :key="i.id"
            >
              <cards :anuncio="i"></cards>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <!--Aqui esta la paginacion-->
    <div class="text-left">
      <br />
      <br />
      <v-pagination v-model="page" :length="3"></v-pagination>
    </div>

    <v-footer>
      <v-card flat tile width="100%" class="black white--text text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="white--text" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="white--text pt-0">
          Desarrollado por:
          <strong> Natalia Sofia Martinez Lima ML17002</strong>
        </v-card-text>
        <v-card-text class="white--text pt-0">
          Fundamentos de la programaciòn en internet
          <strong> Universidad de El Salvador</strong>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>© All Right Reserved</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
import Cards from "../components/Cards.vue";
import { db } from "../db";
export default {
  data() {
    return {
      anuncios: [],
      page: 1,
      dialog: false,
      nuevo: false,

      loading: false,
      selection: 1,

      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],

      marcas: ["Samsung", "Huawei", "Nokia", "IPhone", "Xiaomi", "Otros"],
      marcasSelected: [],
      sistemas: ["Android", "iOS", "Windows"],
      sistemasSelected: [],
      pantallas: ["6.0", "5.5", "5.0"],
      pantallasSelected: [],
      estados: ["Nuevo", "Usado"],
      estadosSelected: [],
      estadoChange: "Ambos",
    };
  },
  firestore: {
    anuncios: db.collection("anuncio"),
  },
  components: {
    Cards,
  },
  methods: {
    cambio() {
      if (this.estadoChange == "nuevo") {
        this.estadosSelected = ["nuevo"];
      } else if (this.estadoChange == "usado") {
        this.estadosSelected = ["usado"];
      } else {
        this.estadosSelected = [];
      }
    },
  },
  computed: {
    AnunciosFiltrados: function () {
      return this.anuncios.filter(function (filtro) {
        if (
          this.marcasSelected.length > 0 ||
          this.pantallasSelected.length > 0 ||
          this.sistemasSelected.length > 0
        ) {
          if ((this.marcasSelected.length > 0) & (this.pantallasSelected.length > 0)) {
            
            return (
              
              this.marcasSelected.includes(filtro.marca) &
              this.pantallasSelected.includes(filtro.pantalla) 
            );
          } else if ((this.marcasSelected.length > 0) & (this.sistemasSelected.length > 0)) {
            return (
              this.marcasSelected.includes(filtro.marca) &
              this.sistemasSelected.includes(filtro.sistema)
            );
          } else if ((this.sistemasSelected.length > 0) & (this.pantallasSelected.length > 0)) {
            return (
              this.sistemasSelected.includes(filtro.sistema) &
              this.pantallasSelected.includes(filtro.pantalla) 
            );
          } else {
            return (
              (this.marcasSelected.includes(filtro.marca) ||
                this.sistemasSelected.includes(filtro.sistema) ||
                this.pantallasSelected.includes(filtro.pantalla)) 
            );
          }
        } else {
          return (
            !this.marcasSelected.includes(filtro.marca) &
            !this.sistemasSelected.includes(filtro.sistema) &
            !this.pantallasSelected.includes(filtro.pantalla)
          );
        }
      }, this);
    },
  }

};
</script>
