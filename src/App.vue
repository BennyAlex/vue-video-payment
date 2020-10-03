<template>
  <v-app id="inspire">
    <v-toolbar
        extended
        elevation="1"
        color="primary"
        class="white--text flex-grow-0"
        id="main-bar"
    >
      <v-toolbar-title>vue video payment app</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text to="/" color="white">
        Home
      </v-btn>

      <v-btn text to="/login" color="white">
        Login
      </v-btn>

      <v-btn text to="/register" color="white">
        Register
      </v-btn>
    </v-toolbar>

    <v-card
        class="mx-auto"
        min-width="300px"
        width="70%"
        max-width="1060px"
        style="margin-top: -64.7px;"
        elevation="4"
        min-height="600px"
    >
      <v-toolbar flat>
        <v-toolbar-title class="grey--text text--darken-4 font-weight-bold">
          {{ title }}
        </v-toolbar-title>

      </v-toolbar>

      <v-divider style="border-top-width: 1.3px"/>

      <v-card-text style="font-size: 17px" class="black--text pa-9 mt-3">

        <router-view/>

      </v-card-text>
    </v-card>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class App extends Vue {
  get title() {
    return this.$route.name || 'Home'
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.v-toolbar__extension {
  height: 64px !important;
}

#main-bar {
  height: 128px !important;
}

.v-input__icon {
  cursor: pointer !important;
}
</style>