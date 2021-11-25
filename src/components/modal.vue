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
            <v-col cols="12" sm="6" md="6">
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-select
                  v-model="nuevo.estado"
                  :items="items"
                  :rules="[(v) => !!v || 'es requerido llenar este campo']"
                  label="Estado"
                  required
                ></v-select>

                <v-text-field
                  v-model="nuevo.marca"
                  :rules="marcaRules"
                  label="Marca"
                  type="text"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="nuevo.modelo"
                  :rules="modeloRules"
                  label="Modelo"
                  type="text"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="nuevo.pantalla"
                  :rules="pantallaRules"
                  label="Tamaño de la pantalla"
                  prefix="(Pulgadas)"
                  type="number"
                  required
                ></v-text-field>

                <v-select
                  v-model="nuevo.sistema"
                  :items="items1"
                  label="Sistema operativo"
                >
                </v-select>

                <v-text-field
                  v-model="nuevo.rom"
                  :rules="romRules"
                  label="Rom (almacenamiento interno)"
                  type="number"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="nuevo.ram"
                  :rules="ramRules"
                  label="Ram"
                  prefix="GB"
                  type="number"
                  required
                ></v-text-field>
                <br />
                <v-file-input v-model="imagen" label="File input" outlined dense></v-file-input>

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

            <v-col cols="12" md="6" sm="6">
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="nuevo.titulo"
                  :counter="60"
                  :rules="nameRules"
                  label="Titulo breve del anuncio"
                  type="text"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="nuevo.vendedor"
                  :counter="40"
                  :rules="vendedorRules"
                  label="Vendedor"
                  type="text"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="nuevo.telefono"
                  :counter="8"
                  :rules="telefonoRules"
                  label="Telefono"
                  prefix="+503"
                  type="number"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="nuevo.descripcion"
                  :counter="220"
                  :rules="descripcionRules"
                  label="Descripcion"
                  type="text"
                  required
                ></v-text-field>

                <v-col
                  cols="12"
                  md="6"
                  sm="6"
                  style="margin-left: 25%; margin-top: 5%"
                >
                  <v-text-field
                    v-model="nuevo.precio"
                    :rules="precioRules"
                    label="precio"
                    prefix="$"
                    type="number"
                    required
                  ></v-text-field>
                </v-col>

                <v-btn
                  depressed
                  color="red lighten-4"
                  style="margin-top: 8%; margin-left: 27%"
                >
                  Cancelar
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
          <pre>{{ nuevo }}</pre>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { db } from "../db";
export default {
  data() {
    return {
      nuevo: {
        descripcion: "",
        estado: "",
        marca: null,
        modelo: "",
        pantalla: 0,
        precio: 0,
        ram: 0,
        rom: 0,
        sistema: null,
        telefono: 0,
        titulo: "",
        vendedor: "",
        imagenes: [],
      },
      imagen:null,

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
        (v) => (v && v.length <= 220) || "",
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
        (v) => (v && v.length <= 4) || "",
      ],
      ram: "",
      ramRules: [
        (v) => !!v || "Es requerido llenar el campo",
        (v) => (v && v.length <= 4) || "",
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
  methods: {
    async enviarBase() {
      try {
        let r = await db.collection("anuncio").add(this.nuevo);
        return r.id;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    async modificarBase(id) {
      await db
        .collection("anuncio")
        .doc(id)
        .set(this.nuevo)
        .catch((error) => {
          console.error(error);
        });
    },
    agregarImagen() {
      if (this.imagen != null) {
        this.imagenes.push(this.imagen);
        this.imagenesUrl.push(URL.createObjectURL(this.imagen));
        this.imagen = null;
        this.$refs.formImg.reset();
      }
    },
  },
};
</script>
