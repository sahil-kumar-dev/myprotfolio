const nav_item=document.querySelector('.nav-items');
const list_items=document.querySelectorAll('.list-items');
const links=document.querySelectorAll('.nav-items li a');
const menu=document.querySelector('.menu');


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

// window.addEventListener('scroll',()=>{
//     if(window.pageYOffset>465 && window.pageYOffset<850){
//         links.forEach((li)=>{
//             li.classList.remove('active')
//         })
//         links[2].classList.add('active');
//     }
//     if(window.pageYOffset>0 && window.pageYOffset<465){
//         links.forEach((li)=>{
//             li.classList.remove('active')
//         })
//         links[0].classList.add('active');

//     }
// })


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
    backSpeed:30,
    loop:true
  });



// -------------------------Scroll animation--------------------------------
// ScrollReveal({
//     distance: '60px'
// })
// ScrollReveal().reveal('.navbar', { delay: 200, origin: 'top' });
// ScrollReveal().reveal('.logo', { delay: 600, origin: 'left', reset: false });
// ScrollReveal().reveal('.text1', { delay: 800, origin: 'left', reset: true });
// ScrollReveal().reveal('.photo', { delay: 800, origin: 'top', reset: true });

// // -----------------------skill section ---------------------
// ScrollReveal().reveal('.skill-1', { delay: 400, origin: 'bottom', reset: true });
// ScrollReveal().reveal('.skill-2', { delay: 600, origin: 'bottom', reset: true });
// ScrollReveal().reveal('.skill-3', { delay: 800, origin: 'bottom', reset: true });
// ScrollReveal().reveal('.skill-4', { delay: 1000, origin: 'bottom', reset: true });
// ScrollReveal().reveal('.skill-5', { delay: 1100, origin: 'bottom', reset: true });
// ScrollReveal().reveal('.skill-6', { delay: 1200, origin: 'bottom', reset: true });


// // -------------------------projects--------------------------
// ScrollReveal().reveal('.project-1', { delay: 400, origin: 'bottom', reset: true });
// ScrollReveal().reveal('.project-2', { delay: 800, origin: 'bottom', reset: true });
// ScrollReveal().reveal('.project-3', { delay: 400, origin: 'bottom', reset: true });
// ScrollReveal().reveal('.project-4', { delay: 800, origin: 'bottom', reset: true });
// ScrollReveal().reveal('.project-5', { delay: 400, origin: 'bottom', reset: true });
// ScrollReveal().reveal('.project-6', { delay: 800, origin: 'bottom', reset: true });


// // -------------------------education detialis-------------------
// ScrollReveal().reveal('.education-1', { delay: 400, origin: 'bottom', reset: true });
// ScrollReveal().reveal('.education-2', { delay: 800, origin: 'bottom', reset: true });
// ScrollReveal().reveal('.education-3', { delay: 1000, origin: 'bottom', reset: true });
// // ------------------------------contact me------------------------
// // ScrollReveal().reveal('.right', { delay:400, origin: 'left', reset: true });
// // ScrollReveal().reveal('.left', { delay: 400, origin: 'right', reset: true });

// // ------------------------------icons ------------------------
// ScrollReveal().reveal('.icon-1', { delay:400, origin: 'bottom', reset: true });
// ScrollReveal().reveal('.icon-2', { delay:600, origin: 'bottom', reset: true });
// ScrollReveal().reveal('.icon-3', { delay:800, origin: 'bottom', reset: true });
// ScrollReveal().reveal('.icon-4', { delay:1000, origin: 'bottom', reset: true });
// ScrollReveal().reveal('.icon-5', { delay:1200, origin: 'bottom', reset: true });


// // ------------------------------form------------------------
// ScrollReveal().reveal('.text', { delay:200, origin: 'bottom', reset: true });
// ScrollReveal().reveal('.email', { delay:400, origin: 'bottom', reset: true });
// ScrollReveal().reveal('.number', { delay:800, origin: 'bottom', reset: true });
// ScrollReveal().reveal('.submit', { delay:1000, origin: 'bottom', reset: true });