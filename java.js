let btn =document.getElementById("btn");
/*
btn.onclick= function(){
    console.log("hello");
    let d1=document.getElementById("m");
       d1.innerText="messi is the best player in the world wid cup"
    this.style.background="red";
    document.body.style.background="black";
    console.log()
   }
*/
// btn.addEventListener(`click`,function(){
//     document.body.style.background="red";
// })
// btn.addEventListener(`click`,function(){
//    btn.style.color="blue";

// })
// btn.addEventListener(`click`,function(){
//    btn.style.background="green";

// })


let dollar=document.getElementById("dollar");
let irq=document.getElementById("irq");
dollar.onkeyup=function(){
   console.log(dollar.value)
irq.value=dollar.value*1500;
}
irq.onkeyup=function(){
dollar.value=irq.value/1500;
}