// ?什么是垫片shimming呢?
// *shimming就是一种技术，使用的原因是什么呢?
// *有这么一种场景，假入我们使用了第三方库lodash,我们使用_,但是我们并没有导入lodash,这个时候我们默认全局有折磨一个属性
// *但是全局并没有这么一个属性，就会报错
// ?那我们就可以通过shimming来解决这个问题，我们会通过webpack提供给我们的ProvidePlugin来解决这个问题

// todo 通过new ProvidePlugin({key:value})的形式来使用，前提是install了这个包
// !webpack不推荐我们使用这种方式，因为整个前端开发就是模块化，具有封闭性的