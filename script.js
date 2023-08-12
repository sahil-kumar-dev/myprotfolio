const nav_item=document.querySelector('.nav-items');
const list_items=document.querySelectorAll('.list-items');
const links=document.querySelectorAll('.nav-items li a');


links.forEach((link)=>{
    link.addEventListener('click',()=>{
        if(!link.classList.contains('active')){
            links.forEach((li)=>{
                li.classList.remove('active')
            })
            link.classList.add('active')
        }
    })
})


const menu=document.querySelector('.menu');


function showMenu(){
    if(nav_item.classList.contains('top-14')){
        nav_item.classList.replace('top-14','-top-72');
    }
    else{
        nav_item.classList.replace('-top-72','top-14');
    }
    menu.classList.toggle('active-menu')
}

list_items.forEach((item)=>{
    item.addEventListener('click',()=>{
        if(nav_item.classList.contains('top-14')) {
            nav_item.classList.replace('top-14','-top-72');
            menu.classList.remove('active-menu')
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
ScrollReveal().reveal('.photo', { delay: 800, origin: 'top', reset: true });

// -----------------------skill section ---------------------
ScrollReveal().reveal('.skill-1', { delay: 400, origin: 'bottom', reset: true });
ScrollReveal().reveal('.skill-2', { delay: 600, origin: 'bottom', reset: true });
ScrollReveal().reveal('.skill-3', { delay: 800, origin: 'bottom', reset: true });
ScrollReveal().reveal('.skill-4', { delay: 1000, origin: 'bottom', reset: true });
ScrollReveal().reveal('.skill-5', { delay: 1100, origin: 'bottom', reset: true });
ScrollReveal().reveal('.skill-6', { delay: 1200, origin: 'bottom', reset: true });


// -------------------------projects--------------------------
ScrollReveal().reveal('.project-1', { delay: 400, origin: 'bottom', reset: true });
ScrollReveal().reveal('.project-2', { delay: 800, origin: 'bottom', reset: true });