// login
var login=document.querySelector('.login');
document.querySelector("#login-btn").onclick=()=>{
    login.classList.toggle("active")
}


// register
var register= document.querySelector('.register');
document.querySelector('#register-btn').onclick=()=>{
    register.classList.toggle('active')
}

// success
var success=document.querySelector('.success');
document.querySelector('#login-submit').onclick=()=>{
    success.classList.add('active');
}

// success
document.querySelector('#success-close').onclick=()=>{
    success.classList.remove('active');
}

// register login
document.querySelector("#login-btn2").onclick=()=>{
    register.classList.remove('active')
    login.classList.add("active")
}


window.addEventListener('scroll',hide);
function hide(){
    login.classList.remove("active")
}



// ITEM TABS
var items=document.getElementById('items');

items.addEventListener('click',tabclick);

function tabclick(a){
    const activeitem=document.querySelectorAll(".active")

    activeitem.forEach((tab)=>{
        tab.classList.remove("active");
    })

    a.target.parentElement.classList.add("active");

    const pages=document.querySelectorAll(".page");
    pages.forEach((page)=>{
     page.classList.remove("pageactive");
    });

    let id=event.target.href.split("#")[1];
   const page=document.getElementById(id);
   page.classList.add("pageactive");

}

// add fav
var favbtn=document.querySelectorAll('.btn-fav');
favbtn.forEach(fav =>{
   fav.addEventListener('click',()=>{
    fav.classList.toggle('favactive')
   })
})


// additem
var cartbtn=document.querySelectorAll('.btn-item');
var count=document.getElementById("count");
cartbtn.forEach(cart =>{
   cart.addEventListener('click',()=>{
    count.innerHTML++;
    if(cart.innerHTML!="ADDED"){
    cart.innerHTML='<i class="fa fa-cart-shopping"></i> ADDED';
    cart.style.background="#3b2ecc"
    }
    else{
        alert('ALREADY ADDED')
    }
   })
})