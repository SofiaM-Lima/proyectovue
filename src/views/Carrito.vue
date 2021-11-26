<template>
  <div style="margin-top: 8%">
    <v-container>
      <v-row no-gutters>
        <v-col>
          <v-card class="pa-2" outlined tile color="transparent">
            <v-img
              max-height="100"
              max-width="350"
              src="https://depor.com/resizer/SE_N58K1HBfTGOBmOBlgedOXcnY=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/SYLYTY3YGNDPNEGNCRB53ECO7E.jpg"
            >
            </v-img>
          </v-card>
        </v-col>
        <v-col order="12">
          <v-card class="pa-2" outlined tile color="transparent">
            <v-row
              align="center"
              justify="space-around"
              style="margin-top: 10%"
            >
              <v-btn depressed color="green"> Comprar </v-btn>
            </v-row>
          </v-card>
        </v-col>
        <v-col order="1">
          <v-card class="pa-2" outlined tile color="transparent">
            <v-card-text>
              <p align="center">Xiaomi</p>
              <p align="center">Precio: $555</p>
              <p align="center">vendedor: Mariano</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-footer>
      <v-card
        flat
        tile
        width="100%"
        class="black white--text text-center"
        style="margin-top: 8%"
      >
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
export default {
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
};
</script>