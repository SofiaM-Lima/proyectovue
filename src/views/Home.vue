<template>
  <div>
    <!--Modal para lo del boton de celular-->
    <div class="hidden-md-and-up" style="margin-top: 15%">
      <v-row justify="center">
        <v-col cols="4">
          <div class="text-subtitle-2">Ordenar por:</div>
          <v-btn color="red" small> <v-icon>mdi-arrow-up</v-icon>Precio </v-btn>
        </v-col>
        <v-btn color="grey darken-3" dark @click.stop="dialog = true">
          <v-icon color="red">mdi-filter</v-icon>
        </v-btn>
        <v-dialog v-model="dialog" max-width="220">
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
      <v-col md="3" class="hidden-md-and-down" style="margin-top: 3%">
        <div>
          <v-container>
            <v-switch class="strech" v-model="nuevo" label="nuevo"></v-switch>
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
      <v-row style="margin-top: 9%">
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

      methods: {
        reserve() {
          this.loading = true;

          setTimeout(() => (this.loading = false), 2000);
        },
      },
    };
  },
  firestore: {
    anuncios: db.collection("anuncio"),
  },
  components: {
    Cards,
  },
};
</script>
