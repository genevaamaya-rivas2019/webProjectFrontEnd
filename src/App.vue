<template>
  <v-app>
    <!-- <v-app-bar app color="primary" dark>
      <div class="d-flex align-center"></div>

      <v-spacer></v-spacer>
    </v-app-bar> -->

    <v-content>
      <CoverPage />
    </v-content>
  </v-app>
</template>

<script>
import CoverPage from "./components/CoverPage";

export default {
  name: "App",

  components: {
    CoverPage
  },

  data: () => ({
    //
  })
};
</script>
