/**
 * 实现一个简单闭包 
 */

// 立即执行函数 
for(var i = 0; i < 5; i++)
{
    (function(j){
        setTimeout(function(){
            console.log(j);
        }, j * 1000);
 
    })(i); // 是否可以看做一个闭包 ？ 
}




function   closure()
{
    var i = 0; 
     return   function () {
         console.log(i);
     } 
}

var fn = closure()();

// 保证某个变量不被外界轻易访问-但执行可以调用外部函数-实现内部变量的依次获取 

// 回顾 - 事件循环机制 ：
// 在函数调用栈中 ， 任务的执行有一定顺序 -- 同步先执行 
// 异步事件 如 promise ， setTimeout  等会被放到 任务队列中待同步代码执行完毕 → 调用栈清空 → 开始处理任务队列
// 依次放入宏任务和微任务队列- 先执行微任务后执行宏任务 
// -- 微任务包括 - primise ， process.nextTick
//  宏任务 - setTimeOut Dom事件 ， AJax ， UI渲染   
// 在微任务执行完后 ， 再执行宏任务 ， 每执行一个宏任务会再清空当前的微任务队列 



/**
 *  实现一个 count（） - 每次调用 count（） 都会返回一个递增的数字 
 *   
 */


console.log('实现一个 count（） - 每次调用 count（） 都会返回一个递增的数字 ');
const count = (function count()
{
    var i = 0; 
    return function () {
        console.log(++i);
        return i;
    }
})()


count(); // 1
count();


/**
 *  实现一个sleep 
 */

function sleep(delay)
{
    //  并未实现延迟 
        return new Promise(resolve =>{
            setTimeout(resolve,delay)
        })
}

//具体使用 ：

async  function getxx()
{
     await sleep(2000); // await 实际含义 -- promise 这一块 // 明晰 

/**
 * 推测可能性 ： 
 *   await 处理暂停只是针对异步函数 -promise （微任务部分 ）
 */

     console.log("延迟2秒执行 ")
}

getxx()

/**
 *  Promise 类了解 ：
 *   
 */









