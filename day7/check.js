const proone=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username:"shashank",mail:"sjanana2GMAIL.COM"
        })
    },1000)

})
proone.then(function(user){
    console.log(user);

})


const another=new Promise(function(resolve,reject){
    setTimeout((use)=>{
        let error=true
        if (!error){
            resolve({username:"shashank",password:"12345"})
        }else{
            reject("ERROR:Something went wrog please check")
        }

            
        },1000)
})
another.then((user)=>{
console.log(user)
}).catch(function(err){
    console.log(err);
})


const anotherr=new Promise(function(resolve,reject){
    setTimeout((use)=>{
        let error=false
        if (!error){
            resolve({username:"shashank",password:"12345"})
        }else{
            reject("ERROR:Something went wrog please check")
        }

            
        },1000)
})
anotherr.then((user)=>{
console.log(user)
return user.username
}).then((username)=>{
    console.log(username)
})
.catch(function(err){
    console.log(err);
}).finally(function(){
    console.log("Finally done")
})


//use of async await
const annn=new Promise(function(resolve,reject){
setTimeout((user) => {
    let d=true
    if (!d){
        resolve({name:"shashank"})
    }else{
    reject("sorry error")
    
}
},1000)
})
// async function checkck(){
// try {
//     const annn=await a
//     console.log(an);
    
// } catch (error) {
//     console.log(error);
    
// }
// }
// checkck()


//basic eg  

fetch('exaple.com')
.then((res)=>{
    return res.json()

}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})


