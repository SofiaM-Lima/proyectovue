<template>
  <div>
    <!--Modal para lo del boton de celular-->
    <div class="hidden-md-and-up" style="margin-top:25%">
      <v-row justify="center">
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
              <v-btn color="red" text @click="dialog = false">
                OK
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
    <!--Aqui se procede hacer el menu que lleva sistema,pantalla,marca-->
    <v-row>
      <v-col md="3" class="hidden-md-and-down" style="margin-top:6%">
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
      <v-row style="margin-top:13%">
        <v-col md="2.25">
          <div>
            <v-card max-width="200">
              <v-img
                height="150px"
                src="https://www.altonivel.com.mx/wp-content/uploads/2019/01/celulares-2019.jpg"
              >
              </v-img>
              <v-card-subtitle class="pb-0"> Samsung A21 </v-card-subtitle>
              <v-card-text class="text--primary">
                <div>$325</div>
                <div>Celular en buen estado, si desea saber mas detalles presiones en detalles</div>
              </v-card-text>
              <v-card-actions>
              <v-btn :to="'/anuncio/'" color="orange" text> Detalles </v-btn>
              </v-card-actions>
            </v-card>
            <v-card max-width="200">
              <v-img
                height="150px"
                src="https://www.altonivel.com.mx/wp-content/uploads/2019/01/celulares-2019.jpg"
              >
              </v-img>
              <v-card-subtitle class="pb-0"> Huawei Y9 </v-card-subtitle>
              <v-card-text class="text--primary">
                <div>$365</div>
                <div>Celular en buen estado, si desea saber mas detalles presiones en detalles</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="orange" text> Detalles </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-col>
      </v-row>
      <!--Estas serian la segunda card-->
      <v-row style="margin-top:13%">
        <v-col md="2.25" >
          <div>
            <v-card max-width="200">
              <v-img
                height="150px"
                src="https://www.altonivel.com.mx/wp-content/uploads/2019/01/celulares-2019.jpg"
              >
              </v-img>
              <v-card-subtitle class="pb-0"> Nokia Z9 </v-card-subtitle>
              <v-card-text class="text--primary">
                <div>$285</div>
                <div>Celular en buen estado, si desea saber mas detalles presiones en detalles</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="orange" text> Detalles </v-btn>
              </v-card-actions>
            </v-card>
            <v-card max-width="200">
              <v-img
                height="150px"
                src="https://www.altonivel.com.mx/wp-content/uploads/2019/01/celulares-2019.jpg"
              >
              </v-img>
              <v-card-subtitle class="pb-0"> Iphone X </v-card-subtitle>
              <v-card-text class="text--primary">
                <div>$579</div>
                <div>Celular en buen estado, si desea saber mas detalles presiones en detalles</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="orange" text> Detalles </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-col>
      </v-row>
      <!--Estas serian la tercera card-->
      <v-row style="margin-top:13%">
        <v-col md="2.25">
          <div>
            <v-card max-width="200">
              <v-img
                height="150px"
                src="https://www.altonivel.com.mx/wp-content/uploads/2019/01/celulares-2019.jpg"
              >
              </v-img>
              <v-card-subtitle class="pb-0"> Samsung S10 </v-card-subtitle>
              <v-card-text class="text--primary">
                <div>$479</div>
                <div>Celular en buen estado, si desea saber mas detalles presiones en detalles</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="orange" text> Detalles </v-btn>
              </v-card-actions>
            </v-card>
            <v-card max-width="200">
              <v-img
                height="150px"
                src="https://www.altonivel.com.mx/wp-content/uploads/2019/01/celulares-2019.jpg"
              >
              </v-img>
              <v-card-subtitle class="pb-0"> Xiaomi 9S </v-card-subtitle>
              <v-card-text class="text--primary">
                <div>$431</div>
                <div>Celular en buen estado, si desea saber mas detalles presiones en detalles</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="orange" text> Detalles </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-col>
      </v-row>
      <!--Estas serian la cuarta card-->
      <v-row style="margin-top:13%">
        <v-col md="2.25">
          <div>
            <v-card max-width="200">
              <v-img
                height="150px"
                src="https://www.altonivel.com.mx/wp-content/uploads/2019/01/celulares-2019.jpg"
              >
              </v-img>
              <v-card-subtitle class="pb-0"> Nokia Flip </v-card-subtitle>
              <v-card-text class="text--primary">
                <div>$265</div>
                <div>Celular en buen estado, si desea saber mas detalles presiones en detalles</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="orange" text> Detalles </v-btn>
              </v-card-actions>
            </v-card>
            <v-card max-width="200">
              <v-img
                height="150px"
                src="https://www.altonivel.com.mx/wp-content/uploads/2019/01/celulares-2019.jpg"
              >
              </v-img>
              <v-card-subtitle class="pb-0">Iphone 12 </v-card-subtitle>
              <v-card-text class="text--primary">
                <div>$875</div>
                <div>Celular en buen estado, si desea saber mas detalles presiones en detalles</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="orange" text> Detalles </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-row>
    <!--Aqui esta la paginacion-->
    <div class="text-left">
      <br />
      <br />
      <v-pagination v-model="page" :length="6"></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      dialog: false,
      nuevo: false,

      loading: false,
      selection: 1,
      
    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
    };
  },
};
</script>
