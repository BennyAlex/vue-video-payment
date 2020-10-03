import { Vue } from 'vue-property-decorator'

/**
 * simple reactive state
 */
const store = Vue.observable({
    user: undefined
})

export default store