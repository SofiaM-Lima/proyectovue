<template>
  <v-row>
    <v-col md="6">
      <!--El lado izquierdo de los anuncios donde se dan las especificaciones del celular-->
      <v-container>
        <br />
        <br />
        <br />
        <br />
        <v-card>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-select 
            v-model="select" :items="items" :rules="[(v) => !!v || 'Item is required']"
              label="Estado del celular" required ></v-select>
            <v-select 
            v-model="select" :items="items1" :rules="[(v) => !!v || 'Item is required']"
              label="Marca del celular" required ></v-select>
            <v-text-field
              v-model="modelo" :counter="60" :rules="modeloRules"
              label="Modelo del celular" required ></v-text-field>
            <v-text-field
              v-model="pantalla" :counter="60" :rules="pantallaRules"
              label="Tamaño de la pantalla" required ></v-text-field>
            <v-select
              v-model="select" :items="items2" :rules="[(v) => !!v || 'Item is required']"
              label="Sistema del celular" required ></v-select>
            <v-text-field
              v-model="rom" :counter="20" :rules="romRules"
              label="Almacenamiento interno" required ></v-text-field>
            <v-text-field
              v-model="ram" :counter="20" :rules="ramRules"
              label="Ram que posee el celular" required ></v-text-field>
          </v-form>
        </v-card>
      </v-container>
    </v-col>

    <v-col md="6">
      <br />
      <br />
      <br />
      <br />
        <h1 align="center">NUEVO ANUNCIO</h1>
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name" :counter="60" :rules="nameRules"
            label="Titulo breve del anuncio" required
          ></v-text-field>
          <v-text-field
            v-model="vendedor" :rules="vendedorRules"
            label="Vendedor" required
          ></v-text-field>
          <v-text-field
            v-model="telefono" :rules="telefonoRules"
            label="Telefono" required
          ></v-text-field>
          <v-text-field
            v-model="descripcion" :counter="120" :rules="descripcionRules"
            label="Descripcion" required
          ></v-text-field>
          <v-checkbox
            v-model="checkbox" :rules="[(v) => !!v || 'You must agree to continue!']"
            label="Esta de acuerdo con la informacion escrita" required
          ></v-checkbox>
          <v-btn
            :disabled="!valid" color="success"
            class="mr-4" @click="validate"
          >
            Crear</v-btn
          >
          <v-btn color="error" class="mr-4" @click="reset">Cancelar</v-btn>
        </v-form>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Descripcion del producto es requerido",
      (v) => (v && v.length <= 60) || "Name must be less than 60 characters",
    ],
    vendedor: "",
    vendedorRules: [
      (v) => !!v || "Nombre del vendedor requerido",
      (v) => (v && v.length <= 60) || "Name must be less than 60 characters",
    ],
    telefono: "",
    telefonoRules: [
      (v) => !!v || "Telefono requerido",
      (v) => (v && v.length <= 60) || "Name must be less than 60 characters",
    ],
    modelo: "",
    modeloRules: [
      (v) => !!v || "Modelo del celular",
      (v) => (v && v.length <= 60) || "Name must be less than 60 characters",
    ],
    pantalla: "",
    pantallaRules: [
      (v) => !!v || "Descripcion del tamaño de la pantalla",
      (v) => (v && v.length <= 60) || "Name must be less than 60 characters",
    ],
    descripcion: "",
    descripcioRules: [
      (v) => !!v || "Descripcion del producto es requerido",
      (v) => (v && v.length <= 120) || "Descripcion tiene que ser en menos de 120 caracteres",
    ],
    rom: "",
    romRules: [
      (v) => !!v || "Almacenamiento interno",
      (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
    ],
      ram: "",
    ramRules: [
      (v) => !!v || "Ram del celular",
      (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
    ],
    select: null,
    items: ["Nuevo", "Usado"],
    items1: ["Iphone", "Samsung", "Xiaomi", "Huawei", "Nokia", "Alcatel"],
    items2: ["Windows", "Ios", "Android"],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>