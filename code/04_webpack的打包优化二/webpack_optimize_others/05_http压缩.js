// ?http压缩指的是，我们打包的文件的体积已经被我们压缩的很小了，不能再压缩了
// ?这个时候我们还可以通过http压缩，把文件压缩为gzip/br,等格式的压缩文件

// todo 压缩需要几个步骤
// todo 1.通过compress-webpack-plugin在打包的时候就将资源压缩为gzip/br/zlib
// todo 2.客户端(浏览器)会在请求头中告诉服务器，我接受的文件类型为:accept-encoding:gzip,deflate
// todo 3.服务器返回的资源在返回头中告诉客户端，内容类型:content-encoding:gzip/deflate

// *这种方式其实是浏览器的一种特性，因为浏览器在接受文件类型为gzip的时候，会自动进行解压处理，解压完成之后，在解析执行js文件
// *目前比较流行的是gzip压缩，其实还有br/deflate压缩，br压缩目前部分浏览器还不兼容，所以不推荐使用