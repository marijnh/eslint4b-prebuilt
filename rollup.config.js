module.exports = {
  input: "./main.js",
  output: [{
    file: "./dist/eslint4b.js",
    format: "umd",
    name: "ESLint"
  }, {
    file: "./dist/eslint4b.es.js",
    format: "es"
  }],
  plugins: [
    require('rollup-plugin-node-builtins')(),
    require("rollup-plugin-commonjs")(),
    require("rollup-plugin-json")(),
    require("rollup-plugin-babel")(),
    require("rollup-plugin-node-resolve")({mainFields: ["browser", 'module', 'main']}),
    require("rollup-plugin-terser").terser()
  ],
  external(id) { return false }
}
