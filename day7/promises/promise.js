const promiseOne=new Promise(function(resolve,reject){
setTimeout (function(){
    console.log("async task completed")
resolve()
},1000)
})


//lets knew how fetch happens
//fetch("url").then().catch().finally

promiseOne.then(function(){
    console.log("promise is consumed");
    //if we run this it will not show because we are not called this
})
