// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path")

module.exports = {
  outputDir: path.resolve(__dirname, "./docs/"),

  "transpileDependencies": [
    "vuetify"
  ]
}