# 云微博
微信小程序云开发

1. 云开发管理新建集合：topic、reply
2. 上传云函数：incReply、login

PS：第一次玩微信小程序云开发，花了一天时间，随手搞个云微博的 DEMO。三分钟热度过了，删除功能、转发功能、点赞功能懒得加了。哈哈，有兴趣的同学可以接力加下来玩玩 ～～

微信小程序的云开发封装了前端和服务端的操作函数，及权限设计都挺好。但还是有一些限制：

1. 容量和流量限制
2. 只能在云函数和小程序操作，没有其他外部接口
3. 小程序之间不共享

自动鉴权及提供云服务，还是非常适合初级体验开发者的 ～