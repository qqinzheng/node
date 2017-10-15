node.js中的流是处理流数据的抽象接口。
所有的流都是EventEmitter的实例。

我们其实很少用到stream 这个模块,除非我们要创建一个流的实例

一部分阐述了在应用中使用流相关的api,第二部分实现新的流相关的api

node.js 提供的api只能操作string和buffer,可以通过objectMode来将已存在的流切换到对象模式。

流数据存储在内部缓存中,对于皮桶的。

流会一直存储