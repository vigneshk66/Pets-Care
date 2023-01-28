// nav
var navbar= document.querySelector(".navbar");
document.querySelector("#menu-bar").onclick=()=>{
    navbar.classList.toggle("active")
}


var count=document.getElementById('count')
setInterval(()=> {
    const value= count.innerHTML;
    if(value<3125){
        count.innerHTML=parseInt(count.innerHTML)+83;
        ;
    }
},50)

var count1=document.getElementById('count1')
setInterval(()=> {
    const value1= count1.innerHTML;
    if(value1<5016){
        count1.innerHTML=parseInt(count1.innerHTML)+152;
        ;
    }
},70)

var count2=document.getElementById('count2')
setInterval(()=> {
    const value2= count2.innerHTML;
    if(value2<16){
        count2.innerHTML=parseInt(count2.innerHTML)+1;
        ;
    }
},150)

var count3=document.getElementById('count3')
setInterval(()=> {
    const value2= count3.innerHTML;
    if(value2<28){
        count3.innerHTML=parseInt(count3.innerHTML)+1;
        ;
    }
},100)



// window scroll effect
window.addEventListener('scroll',reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i=0; i< reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint =150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}



// loding sinnper

var loader=document.getElementsByClassName("lds-hourglass");
var all=document.getElementsByClassName("all");
 setInterval(loading, 1000)

 function loading(){
    
 }




