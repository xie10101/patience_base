//  call -  this 是啥 - 代表 创建出的实例的地址 

// call apply   直接执行 -- apply 传递 数组 
//第一个参数传 null/undefined，this 会自动指向 window/globalThis 

// apply 中 的应用场景 

const arr = [3,1,5,2];
Math.max.apply(Math, arr); // 5
Math.min.apply(Math, arr); // 1

// 参数过多时 


// bind 返回 一个永久绑定该this和预设参数的方法 

const person = { name: '小刚' }
function sayHi(age, city) {
  console.log(`我是${this.name}，${age}岁，住在${city}`);
}

// 生成新函数，this 永久指向 person
const boundFn = sayHi.bind(person, 22);
// 调用新函数，传剩下的参数
boundFn('广州'); 
// 输出：我是小刚，22岁，住在广州



//_________________________


// 通过原型链实现call ：

Function.prototype.myCall = function (context) {
  const fn = Symbol('fn'); // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
  context = context || window; // 若没有传入this, 默认绑定window对象
  context.fn = this; // 将函数挂载到对象的fn属性上
//  私有属性挂载时

  const args = [...arguments].slice(1); // 处理传入的参数 -- 排除 传入的this 
  const result = context.fn(...args); // 通过对象的属性调用该方法
  delete context.fn; // 删除该属性
  return result;
};

// 测试
function test(arg1, arg2) {
  console.log(arg1, arg2);
  console.log(this.a, this.b);
}

test.myCall(
  {
    a: 'a',
    b: 'b',
  },
  1,
  2
);


/**
 * 
 * 
 *  Symbol - 可以用于设置 隐藏唯一性的
 * 
 *   # - 私有方法 / 属性 
 * 
 *   Symbol的作用： 
 *   返回一个唯一的key（像是 hash一样）
 *   取代 字符串（可重复）进行属性值的删改唯一 ，防止被覆盖 ；
 * 
 *     Symbol.for 是为了「跨地方拿到同一个 Symbol」，而不是每次都新生成一个。 
 * Symbol.for(xx)  - 使用相同描述 生成的key是相同的 
 */



/***
 * 
 * js 中 形参和实参分离 
 * 
 * arguments - 是所有实参 
 * 
 */