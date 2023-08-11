const nav_item=document.querySelector('.nav-items');
const list_items=document.querySelectorAll('.list-items');

function showMenu(){
    if(nav_item.classList.contains('top-14')){
        nav_item.classList.replace('top-14','-top-72');
    }
    else{
        nav_item.classList.replace('-top-72','top-14');
    }
}

list_items.forEach((item)=>{
    item.addEventListener('click',()=>{
       if(nav_item.classList.contains('top-14')) {
            nav_item.classList.replace('top-14','-top-72');
        }
    })
})

let flag = true;
setInterval(() => {
    if (flag) {
        document.title = "Welcome to my Portfolio";
        flag = false;
    }
    else {
        document.title = "Sahil's Portfolio";
        flag = true;
    }
}, 2000);


const navbar = document.querySelector('.navbar');

window.addEventListener('load',()=>{
    scrollTo({
        top:0,
        behavior:"smooth"
    })
})








// ------------------------type script ---------------------------------------

var typed = new Typed('#element', {
    strings: ['Front-end Developer', 'Back-end Developer','Problem Solver','Web Designer'],
    typeSpeed: 50,
    backSpeed:80,
    loop:true
  });



// -------------------------Scroll animation--------------------------------
ScrollReveal({
    distance: '60px'
})
ScrollReveal().reveal('.navbar', { delay: 200, origin: 'top' });
ScrollReveal().reveal('.logo', { delay: 600, origin: 'left', reset: false });
ScrollReveal().reveal('.text', { delay: 800, origin: 'left', reset: true });
ScrollReveal().reveal('.photo', { delay: 800, origin: 'right', reset: true });

// -----------------------skill section ---------------------
ScrollReveal().reveal('.skill-1', { delay: 400, origin: 'left', reset: true });
ScrollReveal().reveal('.skill-2', { delay: 800, origin: 'left', reset: true });
ScrollReveal().reveal('.skill-3', { delay: 1200, origin: 'left', reset: true });
ScrollReveal().reveal('.skill-4', { delay: 600, origin: 'right', reset: true });
ScrollReveal().reveal('.skill-5', { delay: 1000, origin: 'right', reset: true });
ScrollReveal().reveal('.skill-6', { delay: 1400, origin: 'right', reset: true });


// -------------------------projects--------------------------
ScrollReveal().reveal('.project-1', { delay: 400, origin: 'bottom', reset: true });