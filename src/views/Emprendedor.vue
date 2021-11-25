<template>
   <v-layout align-start>
      <v-flex>
         <v-data-table
            :headers="headers"
            :items="emprendedores"
            sort-by="identifica"
            class="elevation-1"
           >
            <template v-slot:top>
               <v-toolbar
                  flat
               >
               <v-toolbar-title>Emprendedor</v-toolbar-title>
               <v-divider
                  class="mx-4"
                  inset
                  vertical
               ></v-divider>
               <v-spacer></v-spacer>
               <v-dialog
                  v-model="dialog"
                  max-width="850px"
               >
                  <template v-slot:activator="{ on, attrs }">
                     <v-btn
                        color="primary"
                        dark
                        class="mb-2"
                        v-bind="attrs"
                        v-on="on"
                     >
                     Nuevo Item
                     </v-btn>
                  </template>
                  <v-card>
                     <v-card-title>
                        <span class="text-h5">{{ formTitle }}</span>
                     </v-card-title>
                     <v-card-text>
                        <v-container>
                           <v-row>
                           <v-col
                             cols="12"
                             sm="6"
                             md="4"
                           >
                             <v-text-field
                               v-model="editedItem.identidad"
                               label="Identidad"
                             ></v-text-field>
                           </v-col>
                           <v-col
                             cols="12"
                             sm="6"
                             md="4"
                           >
                             <v-text-field
                               v-model="editedItem.nombre"
                               label="Nombre"
                             ></v-text-field>
                           </v-col>
                           <v-col
                             cols="12"
                             sm="6"
                             md="4"
                           >
                             <v-text-field
                               v-model="editedItem.apellidos"
                               label="Apellidos"
                             ></v-text-field>
                           </v-col>
                           <v-col
                             cols="12"
                             sm="6"
                             md="4"
                           >
                             <v-text-field
                               v-model="editedItem.fechaNac"
                               label="Fecha Nacimiento"
                             ></v-text-field>
                           </v-col>
                           <v-col
                             cols="12"
                             sm="6"
                             md="4"
                           >
                             <v-text-field
                               v-model="editedItem.direccion"
                               label="Dirección"
                             ></v-text-field>
                           </v-col>
                           <v-col
                             cols="12"
                             sm="6"
                             md="4"
                           >
                             <v-text-field
                               v-model="editedItem.telefono"
                               label="Teléfono"
                             ></v-text-field>
                           </v-col>
                           <v-col
                             cols="12"
                             sm="6"
                             md="4"
                           >
                             <!-- <v-text-field
                               v-model="editedItem.genero"
                               label="Género"
                             ></v-text-field> -->
                             <v-combobox
                                dense
                                small-chips
                              ></v-combobox>
                           </v-col>
                           <v-col
                             cols="12"
                             sm="6"
                             md="4"
                           >
                             <v-text-field
                               v-model="editedItem.email"
                               label="Email"
                             ></v-text-field>
                           </v-col>
                         </v-row>
                       </v-container>
                     </v-card-text>

                     <v-card-actions>
                       <v-spacer></v-spacer>
                       <v-btn
                         color="blue darken-1"
                         text
                         @click="close"
                       >
                         Cancelar
                       </v-btn>
                       <v-btn
                         color="blue darken-1"
                         text
                         @click="save"
                       >
                         Guardar
                       </v-btn>
                     </v-card-actions>
                   </v-card>
                 </v-dialog>
                 <v-dialog v-model="dialogDelete" max-width="500px">
                   <v-card>
                     <v-card-title class="text-h5">esta seguro que desea eliminar este item?</v-card-title>
                     <v-card-actions>
                       <v-spacer></v-spacer>
                       <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                       <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                       <v-spacer></v-spacer>
                     </v-card-actions>
                   </v-card>
                 </v-dialog>
               </v-toolbar>
             </template>
             <template v-slot:item.actions="{ item }">
               <v-icon
                  small
                  class="mr-2"
                  @click="editItem(item)"
               >
               mdi-pencil
               </v-icon>
               <v-icon
                  small
                  @click="deleteItem(item)"
               >
               mdi-delete
               </v-icon>
            </template>
            <template v-slot:no-data>
               <v-btn
                  color="primary"
                  @click="fetchEmprendedores"
               >
               Reset
               </v-btn>
            </template>
         </v-data-table>


      </v-flex>
   </v-layout>

</template>

<script>
import {mapActions, mapState, mapMutations } from 'vuex';

export default {
  name: 'Emprendedor',
  data(){
      return {
            dialog: false,
            dialogDelete: false,
            headers: [
              {
                text: 'Identificación',
                align: 'start',
                sortable: true,
                value: 'identidad',
              },
              { text: 'Nombre', value: 'nombre' },
              { text: 'Apellidos', value: 'apellidos' },
              { text: 'Fecha Nacimiento', value: 'fechaNac' },
              { text: 'Dirección', value: 'direccion' },
              { text: 'Telefono', value: 'telefono' },
              { text: 'Genero', value: 'genero' },
              { text: 'Email', value: 'email' },
              { text: 'Actions', value: 'actions', sortable: false }
            ],
            //desserts: [],
            editedIndex: -1,
            editedItem: {
              identidad: '',
              nombre: '',
              apellidos: '',
              fechaNac: '2000/01/01',
              direccion: '',
              telefono: '',
              genero: '',
              email: ''
            },
            defaultItem: {
              identidad: '',
              nombre: '',
              apellidos: '',
              fechaNac: '2000/01/01',
              direccion: '',
              telefono: '',
              genero: '',
              email: ''
            }
    }
  },
  computed: {
      ...mapState("emprendedor",["emprendedores"]),
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo Item' : 'Editar Item'
      },
    },
  watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
  },
  created () {
      this.fetchEmprendedores()

  },

  methods: {
      ...mapActions("emprendedor", ["fetchEmprendedores","addEmprendedor",
                    "updateEmprendedor","deleteEmprendedor"]),
      editItem (item) {
        this.editedIndex = this.emprendedores.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        this.editedIndex = this.emprendedores.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      deleteItemConfirm () {
        this.emprendedores.splice(this.editedIndex, 1)
        this.deleteEmprendedor(this.editedItem)
        this.closeDelete()
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      save () {
        console.log(this.editedItem)
        if (this.editedIndex > -1) {
          Object.assign(this.emprendedores[this.editedIndex], this.editedItem)
          this.updateEmprendedor(this.editedItem)
        } else {
          this.emprendedores.push(this.editedItem)
          this.addEmprendedor(this.editedItem)
        }
        this.close()
      },
    }

}

</script>