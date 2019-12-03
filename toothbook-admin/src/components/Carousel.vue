<template>
  <v-carousel hide-delimiters>
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
      <v-layout column align-center justify-center class="white--text">
        <img src="../assets/totii.png" alt="Vuetify.js" height="200" />
        <h1 class="black--text mb-2 display-1 text-center">WE CARE FOR YOUR SMILE</h1>
        <!-- <div class="subheading mb-4 text-center">Powered by Group 5</div> -->
        <!-- <v-btn class="mt-12" color="blue lighten-2" dark large href="/pre-made-themes">Get Started</v-btn> -->
      </v-layout>
      <!-- <div id="description">
          <v-card class="mx-auto" color="rgb(255, 255, 255, 0.5)" max-width="400">
            <v-card-text class="black--text headline">
              <div>{{item.text}}</div>
            </v-card-text>
          </v-card>
      </div>-->
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "clientform",
  data: () => ({
    items: [
      {
        src: require("@/assets/pic1.jpg")
      },
      {
        src: require("@/assets/pic2.jpg")
      },
      {
        src: require("@/assets/pic3.jpg")
      },
      {
        src: require("@/assets/pic6.jpg")
      }
    ]
  })
};
</script>

<style scoped>

</style>