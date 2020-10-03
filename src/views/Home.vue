<template>
  <div class="home text-center">

    <div v-if="!$store.user" class="font-weight-bold pb-2"><router-link to="/login">Login</router-link> to see this content</div>

    <!-- normally I would show only the blurred image and after login, request the original image ressource using the auth token -->

    <img alt="Vue logo" src="../assets/logo.png" :class="$store.user ? '' : 'blur' ">

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
.blur {
  filter: blur(15px);
  -webkit-filter: blur(15px);
}
</style>