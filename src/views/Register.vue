<template>
  <div class="register">
    <v-form ref="form" @submit.prevent="register">
      <v-text-field label="Username" placeholder="SuperMario"  outlined rounded
                    v-model="username" type="text"
                    :rules="[$rules.required]"
      />

      <mail-input v-model="mail"/>

      <password-input v-model="password1" :error="!!error"/>

      <password-input v-model="password2" :error="!!error"/>

      <div class="error--text text-center mb-4" v-if="error">
        {{ error }}
      </div>

      <v-row justify="center">
        <v-btn color="primary"  large @click="register" type="submit">Register</v-btn>
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
  private username = ''
  private mail = ''
  private password1 = ''
  private password2 = ''
  private error = ''

  private snackbar = {
    show: false,
    text: '',
    color: 'primary'
  }

  private async register() {
    if (this.$refs['form'].validate()) {
      const match = this.$rules.match(this.password1, this.password2)
      if (match === true) {
        const response = await fetch('https://spect8-streams-backend.dev.vaudience.net/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.mail,
            username: this.username,
            password: this.password1,
            confirmPassword: this.password2
          })
        })

        const json = await response.json()

        if (response.ok) {
          this.snackbar.text = 'Successfully registed, you must confirm your email first before you can login!'
          this.snackbar.color = 'success'
          this.error = ''
        } else {
          this.snackbar.text = 'Error while trying to register!'
          this.snackbar.color = 'error'
          this.error = json.message
          console.log('register error:', json)
        }

        this.snackbar.show = true

        return
      } else {
        this.error = match
      }
    }
  }
}
</script>

<style scoped>

</style>