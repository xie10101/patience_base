//  事件系统实现 


// 分析实现 
class EventEmitter { // 标准的发布订阅模式 
  constructor() {
    this._events = {}; // 保存订阅标志 
  }
//  event 代表事件名 -- map/object中的键

  on(event, callback) {
    let callbacks = this._events[event] || []; // 考虑到多个订阅 
    callbacks.push(callback);// 设置数组 
    this._events[event] = callbacks; // 重新设置 
  }

  off(event) {
    delete this._events[event] // 删除 属性 全部删除吗 ？？
    //  如果是订阅了多个也统一暂停 ？ 如何恢复
  }

  emit(event) {
    let callbacks = this._events[event]; //获取所有的存放的回调 

    if (!callbacks || callbacks.length === 0) {
      throw new Error('You should register listener for event ' + event);
    } // 没有事报错 ？ 

    // 
    const args = [...arguments].slice(1)
    // let args = [].slice.call(arguments, 1);slice只是关心 this 的length 和 [i] ？   // 获取传递的参数值（除去） 
    // arguments 不是 数组 - 类数组对象  // [Arguments] { '0': 1, '1': 2 }
    callbacks.forEach(fn => fn.apply(this, args));
    // 每个方法在执行时都会获得对应的值
  }
}


// argement 补充 
/**
 * 
 * arguments 是类数组对象（Array-like）：
    有 length 属性
    有索引访问（arguments[0]）
    没有数组原型方法（slice、map、forEach 等）
 */


    /** 传递参数this的作用 ：
     *  传递this表示当前EventEmitter 实例 
     *  方便回调函数 执行上下文 （甚至访问 this.off - 终端  , this.emit ）   
     *
     *  emit 参数设计 ： emitter.emit('login', { name: 'tom' }, 18, true);
     */



    
/**
 * 补充 ： ES6 -剩余参数 ，apply 作用 --传递参数数组作为多个参数 
 * 
 *   ...args -- 其中 args 是一个数组用于接收 剩余的实参 
 *    
 * 
 */