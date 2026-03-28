
this 是 JavaScript 函数内置的关键字，不需要手动定义，函数执行时会自动存在，
它的核心含义是：
     指向函数执行时的「调用者」（上下文对象），简单说：谁调用函数，this 就指向谁

几种常见情景 ：

     普通函数理解调用 - this 指向  window/ 浏览器 
     对象方法 -- 指向该对象本身 
     构造函数 / 实例 - 调用  指向创建出的实例 
     DOM 事件回调中，this 指向绑定事件的 DOM 元素。
     重点 - call.apply.bind (Function原型具有的方法) - 用于修改函数的 this指向

重点 ：
const user = {
  name: "小李",
  sayHi: () => {
    console.log(this); // 继承外层 this → 指向 window
  }
};
user.sayHi();

// 上下文对象 ？？ 