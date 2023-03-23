module.exports = {
  // ?下面这个plugin在处理react代码的时候是必须的
  plugins: ["@babel/plugin-transform-runtime"],
  presets: [
    [
      '@babel/preset-env'
    ],
    [
      '@babel/preset-react',
      {
        "runtime": "automatic"
      }
    ]
  ]
}