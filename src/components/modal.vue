<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="red darken-1">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>NUEVO ANUNCIO</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false"> Publicar </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-container class="white" style="margin-top: 1%">
          <v-row>
            <v-col cols="6" sm="6" md="6">
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-select
                  v-model="select"
                  :items="items"
                  :rules="[(v) => !!v || 'es requerido llenar este campo']"
                  label="Estado"
                  required
                ></v-select>

                <v-text-field
                  v-model="marca"
                  :rules="marcaRules"
                  label="Marca"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="modelo"
                  :rules="modeloRules"
                  label="Modelo"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="pantalla"
                  :rules="pantallaRules"
                  label="Tamaño de la pantalla en pulgadas"
                  required
                ></v-text-field>

                <v-select :items="items1" label="Sistema operativo"> </v-select>

                <v-text-field
                  v-model="rom"
                  :rules="romRules"
                  label="Rom (almacenamiento interno)"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="ram"
                  :rules="ramRules"
                  label="Ram"
                  required
                ></v-text-field>
                <br />
                <v-file-input label="File input" outlined dense></v-file-input>

                <v-container>
                  <v-carousel height="250">
                    <v-carousel-item
                      v-for="(item, i) in items2"
                      :key="i"
                      :src="item.src"
                      reverse-transition="fade-transition"
                      transition="fade-transition"
                    ></v-carousel-item>
                  </v-carousel>
                </v-container>
              </v-form>
            </v-col>

            <v-col cols="6" md="6" sm="6">
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="name"
                  :counter="60"
                  :rules="nameRules"
                  label="Titulo breve del anuncio"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="vendedor"
                  :counter="40"
                  :rules="vendedorRules"
                  label="Vendedor"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="phoneNumber"
                  :counter="7"
                  :rules="telefonoRules"
                  label="Telefono"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="descripcion"
                  :counter="120"
                  :rules="descripcionRules"
                  label="Descripcion"
                  required
                ></v-text-field>

                <v-col
                  cols="12"
                  md="5"
                  style="margin-left: 35%; margin-top: 5%"
                >
                  <v-text-field
                    v-model="precio"
                    :rules="precioRules"
                    label="precio"
                    required
                  ></v-text-field>
                </v-col>

                <v-btn depressed color="red lighten-4" style="margin-top:8%; margin-left:35%"> Cancelar </v-btn>
                 <v-btn depressed color="red lighten-4" style="margin-top:8%; margin-left:10%"> Crear </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      valid: true,
      name: "",
      items1: ["Android", "Ios", "Windows"],
      items2: [
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
      nameRules: [
        (v) => !!v || "Es requerido llenar el campo",
        (v) =>
          (v && v.length <= 60) || "Necesita hacerlo en menos de 60 caracteres",
      ],
      vendedor: "",
      vendedorRules: [
        (v) => !!v || "Es requerido llenar el campo",
        (v) => (v && v.length <= 40) || "",
      ],
      phoneNumber: "",
      telefonoRules: [
        (v) => !!v || "Es requerido llenar el campo",
        (v) => (v && v.length <= 40) || "",
      ],
      descripcion: "",
      descripcionRules: [
        (v) => !!v || "Es requerido llenar el campo",
        (v) => (v && v.length <= 120) || "",
      ],
      marca: "",
      marcaRules: [
        (v) => !!v || "Es requerido llenar el campo",
        (v) => (v && v.length <= 20) || "",
      ],
      modelo: "",
      modeloRules: [
        (v) => !!v || "Es requerido llenar el campo",
        (v) => (v && v.length <= 20) || "",
      ],
      pantalla: "",
      pantallaRules: [
        (v) => !!v || "Es requerido llenar el campo",
        (v) => (v && v.length <= 20) || "",
      ],
      rom: "",
      romRules: [
        (v) => !!v || "Es requerido llenar el campo",
        (v) => (v && v.length <= 20) || "",
      ],
      ram: "",
      ramRules: [
        (v) => !!v || "Es requerido llenar el campo",
        (v) => (v && v.length <= 20) || "",
      ],
      precio: "",
      precioRules: [
        (v) => !!v || "Es requerido llenar el campo",
        (v) => (v && v.length <= 20) || "",
      ],
      select: null,
      items: ["Nuevo", "Usado"],
      checkbox: false,
    };
  },
};
</script>