//  实现 一个forEach 

Array.prototype.forEach=function (fn,)
{
     // 其中 是 this 
    //  fn - 函数类型判断 
         
    //  this 必须是 Array 

    // 
}

//  thisArg 可以设置 一个
Array.prototype._forEach = function (fn, thisArg) {
  if (typeof fn !== 'function') throw '参数必须为函数';
  if (!Array.isArray(this)) throw '只能对数组使用forEach方法';
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    fn.call(thisArg, arr[i], i, arr); // 方法执行时 this可修改 为传入的实例 
  }
};
