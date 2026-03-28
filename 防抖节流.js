/** （最常见的应用场景 ）
 *  实现一个函数节流和防抖 - 简单处理  
 * React 中的复杂实现原因 ？ -- 
 */


//  防抖的主要实现： 每次设置一个 计时器 ---该计时器会在delay之后执行fn ，
//  如果再次被调用debounce -- 计时器会被清除 - 并重新赋值 
function Debounce(fn, delay){
     let timer = null;

    return function (fn, delay){ 
        if(timer)
        clearTimeout(timer);

        timer= setTimeout(fn,delay);
        return null          
    }
}


// 节流的要求 ： 在 首次执行后在一段时间内重复调用仅执行一次， 直到下一轮时间开始 

function jieliu(fn ,delay)
{
    let pre= new Data()
     
    return function(fn,delay)
    {
         
        let  now = new Data();    

         if(now-pre> delay ) 
         {
            fn();
            pre=now;

         }
         return null ;
    }
}
//  是否写成立即执行较为方便 

const fun1 = Debounce(fn,2000);

// 实际要执行的方法为 -- fun1 ；
