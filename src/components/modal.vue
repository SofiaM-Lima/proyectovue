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
            <v-btn dark text @click="crearAnuncio()"> Publicar </v-btn>
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
                <v-form ref="formImg">
                  <v-file-input
                    accept="image/png, image/jpeg, image/bmp, image/jpg"
                    v-model="imagen"
                    filled
                    label="File input"
                    @change="agregarImagen()"
                    required
                    outlined
                    dense
                  ></v-file-input>
                </v-form>
                <v-container>
                  <v-carousel height="250">
                    <v-carousel-item
                      v-for="(item, i) in imagenesUrl"
                      :key="i"
                      :src="item"
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

              </v-form>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { db, st } from "../db";
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
        imagen: [],
      },
      imagen: null,
      imagenes: [],
      imagenesUrl: [],
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      valid: true,
      name: "",
      items1: ["Android", "Ios", "Windows"],
      items2: [],
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
    async crearAnuncio() {
      if (
        this.$refs.form.validate() &&
        this.imagenes.length > 0 &&
        this.imagenes.length < 15
      ) {
        var temp = 0;
        let id = await this.enviarBase();
        this.imagenes.forEach((imagen) => {
          var archivo = st.ref("/imagenesAnuncios/" + id + "/" + imagen.name);
          archivo
            .put(imagen)
            .then(() => {
              archivo.getDownloadURL().then((url) => {
                this.nuevo.imagen.push(url);
                console.log(url);
                console.log(this.nuevo);
                temp++;
                if (temp == this.imagenes.length) {
                  this.modificarBase(id);
                  //this.cancelar();
                  this.dialog = false;
                }
              });
            })
            .catch((e) => {
              console.error(e);
              //this.cancelar();
            });
        });
      } else {
        console.error("No valido");
      }
    },
  },
};
</script>
