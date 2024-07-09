var requesturl="https://www.youtube.com/watch?v=_TjtAyMkiTI&list=PPSV"
const xhl=new XMLHttpRequest
xhl.open('GET',requesturl)
xhl.onreadystatechange=function(){
  
    console.log(xhl.readyState)
    if(this.onreadystatechange===4){
        console.log(this.responseText())
    }
}
  
    xhl.send();