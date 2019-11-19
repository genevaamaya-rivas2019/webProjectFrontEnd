<template>
  <v-app id="inspire">
    <v-img max-width src="@/assets/bg.jpg">
      <v-btn color="success" class="btnBook" x-large v-on:click="toUser">Book Now</v-btn>
      <h1 class="display1" bold>Welcome to ToothBook</h1>
      <h2 class="display" >We Care For Your Smile</h2>
    </v-img>
    <!-- <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <center>
                <v-btn color="primary">Book Now</v-btn>
              </center>
            </v-flex>
          </v-layout>
        </v-container>
    </v-content>-->
  </v-app>
</template>
<script>
export default {
    methods:{
        toUser(){
            this.$router.push('/user');
        }
    }
};
</script>
<style scoped>
.btnBook {
  margin-top: 700px;
  margin-left: 70%;
  padding: 500px;
}
.display1 {
  margin-left: 55%;
  margin-top: -600px;
  color: red;
  font-size: 50px;
  font-family:Arial, Helvetica, sans-serif !important;
}
.display {
  margin-left: 50%;
  font-size: 120px !important;
  font-family:Georgia, 'Times New Roman', Times, serif !important;
}
</style>