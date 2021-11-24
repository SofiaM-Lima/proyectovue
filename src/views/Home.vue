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
    <!--Aqui se procede hacer el menu que lleva sistema,pantalla,marca-->
    <v-row>
      <v-col md="3" class="hidden-md-and-down" style="margin-top: 2%">
        <div>
          <v-container>
            <v-switch class="strech" v-model="nuevo" label="nuevo"></v-switch>
            <v-card flat color="transparent">
              <h3 style="margin-left: 40%">Precio</h3>
              <v-card-text>
                <v-row>
                  <v-col class="px-4">
                    <v-range-slider
                      v-model="range"
                      :max="max"
                      :min="min"
                      class="align-center"
                    >
                      <template v-slot:prepend>
                        <v-text-field
                          :value="range[0]"
                          class="mt-0 pt-0"
                          single-line
                          type="number"
                          style="width: 60px"
                          @change="$set(range, 0, $event)"
                        ></v-text-field>
                      </template>
                      <template v-slot:append>
                        <v-text-field
                          :value="range[1]"
                          class="mt-0 pt-0"
                          single-line
                          type="number"
                          style="width: 60px"
                          @change="$set(range, 1, $event)"
                        ></v-text-field>
                      </template>
                    </v-range-slider>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
            <fieldset>
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
            </fieldset>
            <fieldset>
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
            </fieldset>
            <fieldset>
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
            </fieldset>
          </v-container>
        </div>
      </v-col>

      <!--Aqui se empiezan con las card esta es la primera-->

      <v-row style="margin-top: 8%">
        <v-col cols="6" md="3" v-for="i in anuncios" :key="i.titulo">
          <cards :anuncio="i"></cards>
        </v-col>
      </v-row>
    </v-row>
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

      min: 0,
      max: 1000,
      range: [0, 0],

      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
  firestore: {
    anuncios: db.collection("anuncio"),
  },
  components: {
    Cards,
  },
  methods: {
 
  },
};
</script>
<!--  async traerAnuncio() {
      try {
        const snapshot = await db.collection("anuncio").get();
        snapshot.forEach((doc) => {
          let eventoData = doc.data();
          eventoData.id = doc.id;
          this.anuncios.push(eventoData);
        });
      } catch (error) {
        console.log(error);
      }
    },-->