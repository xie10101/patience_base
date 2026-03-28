//  事件系统实现 


// 分析实现 
class EventEmitter {
  constructor() {
    this._events = {};
  }

  on(event, callback) {
    let callbacks = this._events[event] || [];
    callbacks.push(callback);
    this._events[event] = callbacks;
  }

  off(event) {
    delete this._events[event]
  }

  emit(event) {
    let callbacks = this._events[event];

    if (!callbacks || callbacks.length === 0) {
      throw new Error('You should register listener for event ' + event);
    }

    let args = [].slice.call(arguments, 1);
    callbacks.forEach(fn => fn.apply(this, args));
  }
}