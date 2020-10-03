<template>
  <div class="login">
    <v-form ref="form">
      <mail-input v-model="mail"/>

      <password-input v-model="password"/>

      <v-row justify="center">
        <v-btn color="primary" class="mr-0" large @click="login">Login</v-btn>
      </v-row>
    </v-form>

    <v-snackbar
        v-model="snackbar.show"
        :color="snackbar.color"
    >
      {{ snackbar.text }}

      <template v-slot:action>
        <v-btn
            color="white"
            text
            @click="snackbar.show = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import PasswordInput from "@/components/password-input.vue";
import {Component, Vue} from 'vue-property-decorator'
import MailInput from "@/components/mail-input.vue";

@Component({
  name: "Login",
  components: {MailInput, PasswordInput},
})
export default class App extends Vue {
  private mail = ''
  private password = ''

  private snackbar = {
    show: false,
    text: '',
    color: 'primary'
  }

  private async login() {
    if (this.$refs['form'].validate()) {

      const response = await fetch('https://spect8-streams-backend.dev.vaudience.net/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          password: "8dhNw2-aai^2$",
          loginId: "dk@cheergg.com"
        })
      })

      const json = await response.json()

      if (response.ok) {
        this.$store.user = json
        this.snackbar.text = 'Successfully logged in!'
        this.snackbar.color = 'success'
      } else {
        this.snackbar.text = 'Error while trying to login!'
        this.snackbar.color = 'error'
        console.log('login error:', json)
      }

      this.snackbar.show = true

      return
    }
  }
}
</script>

<style scoped>

</style>