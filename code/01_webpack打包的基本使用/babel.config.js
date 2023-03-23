module.exports = {
  // ?可以指定插件
  plugins: [
    // '@babel/plugin-transform-arrow-functions'
  ],
  // ?可以指定预设
  presets: [
    // ?官网在引入语法的时候，不需要require()，我们也可以不使用
    ['@babel/preset-env', ],
    ["@babel/preset-typescript", {
      "corejs": 3,
      "useBuiltIns": 'entry'
    }]
  ]
}