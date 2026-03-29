class EventBus{

     constructor()
     {
         this.Events={}
     }
      
   //emit -- 触发函数 
   
   
   // on -- 触发函数 

   on(event,fn)
   {
      const events = this.Events[event]||[] // 不存在返回 undeifined 
      
      events.push(fn);

      this.Events[event]=events
   }

   off(event,callback )
   {
    // delete this.Events[event];
    // 可以根据传递callback 过滤删除 
     
    let events = this.Events[event].filter((fn)=>fn!=callback) 
     this.Events[event]=events
}


    emit(event,arg) //可能是多个参数 ？  是否可以一个形参对应多个实参 ， 多个参数 一般会使用怎样的方式传递
    {

        const events = this.Events[event]
         // 获取当前的event对应fn 无 则 报错 -- 有则依次执行 可能是多个 
         if(!events ||events.length===0 )
         {
            return new Error("缺少绑定的事件")     
        }
             
        //每个函数执行时需要 将 传递的args参数 -- 包括 
        let args =[...arguments].slice(1); 

        this.Events[event].forEach(fn=>{
            fn.bind(this,args)
        } );
    }

}