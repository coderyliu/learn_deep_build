// ?在js中存在TreeShaking,同样我们也希望对css中没有用到的css代码剔除
// ?实际上css的TreeShaking用到了一种插件purgecss-webpack-plugin

// todo 使用
// todo 在plugin中通过new PurgePlugin({options})来使用，具体可以参考PurgeCss文档
// !注意，需要结合node提供给我们的glob库结合使用，主要使用提供哪些文件需要进行css treeShaking
// !glob.sync(`${paths}/**/*`,{noDir:true})
// !这个插件暂时有bug，暂时别用 bug出现的原因是因为版本太高了，7.*的版本是合适的