const rules = {
    required: (v: string) => !!v || 'Required',
    mail: (v: string) => /.+@.+/.test(v) || 'Mail does not look valid',
    min: (v: string) => v.length >= 8 || 'Must have 8 or more characters',
    match: (v1: string, v2: string, name = 'Passwords') => v1 === v2 || `${name} do not match`
}

export default rules