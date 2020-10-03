<template>
  <v-text-field label="Mail" placeholder="me@gmail.com"  outlined rounded
                v-model="input" type="text"
                :rules="[$rules.required, $rules.mail]"
  />
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component({
  name: "mail-input"
})
export default class App extends Vue {
  @Prop(String) value = ''

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