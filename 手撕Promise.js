//  1. promise 对象存在 三个状态 + 两个回调 - reject resolve
//   then ， catch   两个方法 

// 基础结构 ：

class MyPromise{

    constructor(executor)
    {
        //   这个executor 是 执行器 ，创建时会被执行 ， 执行时应该传入 resolve ，
        //   reject 两个回调作为参数 // 执行时对应的resolve/reject方法是改变 
        //   状态的关键 
        const self = this;  // 保存当前实例对象
        this.status = 'pending';  
           this.callbacks = [];
        this.resolve=(data)=>{
             // 这个状态参数是可能改变的 -- 可能多次执行resolve 
             if(self.status !== 'pending')
             {
                 return ;
             }
             this.status = 'resolved';
             this.Result  = data; 
             // 存在如果是异步操作时需要处理的部分 ：
                // if (self.callback.onResolved) {
                // self.callback.onResolved(data); //执行并传递参数 
                // }
                    self.callbacks.forEach((item) => {
                    item.onResolved(data);
                });
        }
        this.reject=(error)=>{
             if(self.status !== 'pending')
             {
                 return ;
             }
             this.status = 'rejected';
             this.Result  = error;
            //  if (self.callback.onRejected) {
            //     self.callback.onRejected(error); //执行并传递参数 
            // }

                 self.callbacks.forEach((item) => {
                    item.onRejected(error);
                });

        }
        
        // 异步执行时 ？当前可以抓到错误 ？  
        try{
        executor(this.resolve,this.reject) //   前期执行
        }catch(e)
        {
          this.reject(e)
        }
    }

    // 关键是异步状态的了解 - 数据的获取 
    
    then(thenCallBack , catchCallBack){
             return new MyPromise((resolve,reject)=>{ 
                if(this.status==="resolved")
                {
                    const result = thenCallBack(this.Result)
                    resolve(result)
                }
                if(this.status==="rejected")
                {
                    const result = catchCallBack(this.Result)
                    resolve(result) 
                }
                if(this.status==="pending")
                {
                    // 处理pending状
                    this.callbacks.push({
                    onResolved: thenCallBack,
                    onRejected: catchCallBack
                    })
                }

                // 如果.then返回时一个promise实例或者是一个throw错误呢？
            })
    }

    catch()
    {

    }

}
// const  pro1= new MyPromise(( resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("1231")
//     },1000)
// }).then((data)=>{console.log(data)},(err)=>{
//     console.log(err)
    
// }).catch((err)=>{
//     console.log("catch")
//     console.log(err)
// });

const pro1  = new MyPromise((resolve,reject)=>{

   setTimeout(
    ()=>{
        resolve("1231")
    },1000 
   )

})
pro1.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
});
pro1.then((data)=>{
    console.log(data)
    return "345"
})

// let pro1 = new MyPromise((resolve,reject)=>{ 
// let pro1 = new MyPromise((resolve,reject)=>{
// throw new Error('error')
// })
// console.log(pro1)

/// 原型使用 ：

Promise.reject("error").then(
  null,
  err => {
    console.log(err);
    return "123"
  }
).catch(()=>{
    console.log("final catch")
})
// .then((data)=>{ console.log(data); return "345"}).then((data)=>{console.log("123"); console.log(data)});


// 现在身心疲惫 -- 脑袋缓不过来 - 首先 promise使用的少 - 全是在使用其上的封装 --语法糖 

//  根据基础的文章 实现当前的功能 ：
//   执行 rsolve / reject 方法后 得到 result ， 并修状态 - 
//   同时 在 then中 接受result并传递给 callback执行同时 从新赋值 result ；状态不能变 
// 遇到 异步执行 根据 pending 判断 将calback先存储 在 resolve 和 reject执行时依次执行 （使用数组保证多次调用 成功）
// 
//  1. then 方法 
// 返回是promise该如何处理 ？ 
// catch封装 
// resolve ,reject 
// 对callback undefined类型的处理 

//https://juejin.cn/post/7112371657133522974?searchId=20260416202627651379ACFE008DAC8DEA#heading-8 