module.exports = function (api) {
  api.cache(false)
  return {
    presets: [require("@babel/preset-env")],
//    plugins: [require("@babel/plugin-transform-runtime")]
  }
}
