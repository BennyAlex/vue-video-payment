<template>
  <v-text-field label="Password" hint="At least 8 characters" outlined rounded
                v-model="input" :type="show ? 'text' : 'password'" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show = !show" :rules="[$rules.required, $rules.min]" :error="error"
  />
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component({
  name: "password-input"
})
export default class App extends Vue {
  @Prop(Boolean) error: boolean
  @Prop(String) value: string

  private show = false

  get input() {
    return this.value
  }

  set input(val) {
    this.$emit('input', val)
  }
}
</script>

<style scoped>

</style>