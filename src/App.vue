<template>
  <div id="app">

    <layout-base>
      <router-view />
    </layout-base>

  </div>

</template>

<script>
import LayoutBase from '@/layout/Base'

  export default {
    name: 'App', // Nombre con el que se exporta el componente
    components: {
      LayoutBase
    },
};
</script>