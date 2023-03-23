// ?CDN服务是指内容分发网络
// ?指的是我们通过把一些打包生成的静态资源部署在CDN节点上，用户访问的时候，可以选择离用户地域最近的CDN节点访问资源
// ?这样提高文件下载速度和网络请求速度

// *主要分为两种：
// *1.把整个dist文件部署在服务器上，通过绑定域名，一个域名可以绑定多个ip，这样就可以在用户访问的时候，路由选择最近的网络ip地址
// *2.对某个文件(js,css,html,img)等文件进行CDN部署，但是需要花费一定的金钱，现在国内比较好用的CDN运营商:BootCDN
// *我们可以在打包文件的src/link前缀上加上cdn的域名，比如：http://www.cdn.cn/文件名,这样，再把文件放到cdn上，部署到全国

//todo 生成前缀的方法为output有一个属性:publicPath来添加cdn域名
//todo 我们可以打开bootcdn网站可以看到很多工具比如:axios,vue,react都是用了cdn来提高效率

// *3.第三种使用cdn的方法就是我们不对第三方库进行打包，直接用第三方库的cdn
// todo 比如：<script src="https://cdn.bootcdn.net/ajax/libs/axios/1.3.4/axios.js"></script>
// *添加到html标签上，直接使用
// ?但前提是我们不对axios进行打包，在webpack上添加externals:{}
