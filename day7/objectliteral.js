//class is basically not there in an js basically it is a prototype

//lets know basics about the object :- out obb it is very diffcult to deal with the data
//eg to upper lover
//objecttleral:- its bsically we are taking 


//object iteral



let obb=
{
    name:"shashank",
    age:23,
    email:"shaahsanksadsadsa@gmail.com"
}
let abc=function(){
    console.log(`user name isc${this.name}`)
    
}
abc.call(obb)

