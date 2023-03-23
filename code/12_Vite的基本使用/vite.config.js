import path from 'path'
import vue from '@vitejs/plugin-vue'

// console.log(process.env.NODE_ENV)
// console.log(import.meta.env)
export default {
  // !这行代码非常重要，在生产构建的时候要加上base,否则会报错
  // *因为默认为'/'是绝对路径(电脑主机ip/assets/xxx.js)，在生产环境下会报错，找不到资源啊
  // *所以要改为相对路径'./' 以当前的相对路径去找资源
  // base:'code/12_Vite的基本使用/dist',
  base: './',
  // ?插件的使用
  plugins: [vue()],
  // ?优化css
  css: {
    postcss: {
      // plugins:['postcss-preset-env']
    }
  },
  //?构建选项 
  build: {
    assetsDir: 'static', //静态资源打包生成目录 默认是assets
    assetsInlineLimit: 1024 * 20, // 图片转 base64 编码的阈值
    sourcemap: true, //生成sourcemap 默认为false
    minify: 'terser',
    terserOptions: {
      // todo 去除log等压缩
      compress: {
        drop_console: true,
        drop_debugger: true,
      }
    }
  },
  // ?本地server
  server: {
    port: 8080,
    open: true,
    //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
    strictPort: false,
    proxy: {
      '/users': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/users/, '')
      }
    }
  },
  // ?配置别名
  resolve: {
    extensions: ['.js', '.json', 'jsx', 'vue'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  // ?优化选项
  optimizeDeps: {
    force: true // 强制进行依赖预构建,防止使用缓存中的内容
  },
}