<template>
  
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      app clipped
    >
      <v-list>
        <!-- <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        > -->
          <v-list-item :to="{path: '/'}">
            <v-list-item-action>
              <v-icon>mdi-{{ icons[0] }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Inicio</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="{path: '/Emprendedor'}">
            <v-list-item-action>
              <v-icon>mdi-{{ icons[1] }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Emprendedor</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          
          <v-list-item :to="{path: '/PlanNegocio'}">
            <v-list-item-action>
              <v-icon>mdi-{{ icons[2] }}</v-icon>
            </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Plan de Negocio</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          
          <v-list-item :to="{path: '/Usuarios'}">
            <v-list-item-action>
              <v-icon>mdi-{{ icons[3] }}</v-icon>
            </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Usuarios</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="{path: '/Contacto'}">
            <v-list-item-action>
              <v-icon>mdi-{{ icons[4] }}</v-icon>
            </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Contáctanos</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="{path: '/Ayuda'}">
            <v-list-item-action>
              <v-icon>mdi-{{ icons[5] }}</v-icon>
            </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Ayuda</v-list-item-title>
            </v-list-item-content>
          </v-list-item>


        <!-- </v-list-item-group> -->
      </v-list>
    </v-navigation-drawer>

    <v-card class="mx-auto overflow-hiden" height="100%" width="100%">
      <v-system-bar color="deep-purple darken-3"></v-system-bar>
      <v-app-bar class="deep-purple accent-4 white--text">
      <v-app-bar-nav-icon @click="drawer=true" class="white--text"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <v-list-item :to="{path: '/'}">
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="../assets/logoicono.png"
              transition="scale-transition"
              width="60"
              :to="{path: '/'}"
            /> 
            <h3 class="deep-purple accent-4 white--text" >
              Mi Proyecto. Emprendedor te ayudamos a generar el documento del Plan de Negocios.
            </h3>
          </v-list-item>
        
        </v-toolbar-title>
      
      </v-app-bar>
      
      <v-main>
        <v-container fluid>
          <v-fade-transition mode="out-in">
            <router-view></router-view>
          </v-fade-transition>
        </v-container>
        
        
      </v-main>
    
    </v-card>
  </v-app>  

</template>

<script>
  export default {
    name: 'Base', // Nombre con el que se exporta el componente
    data: () => ({
      icons: ['home','account-edit','book-account','contacts','phone','help-box'],
      drawer: false,
    }),
};
</script>

