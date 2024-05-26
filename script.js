let menuIcon = document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.oneclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections=document.querySelectorAll('section')
let navLink=document.querySelectorAll('header nav a')
window.onscroll=(sec=>{
    let top=window.scrollY;
    let offset=sec.offsetTop-100;
    let height=sec.offsetHeight;
    let id=sec.getAtrribute('id')
    if(top>offset && top<offset + height){
        navLink.forEach(links=>{
            links.classList.remove('active')
            document.querySelector('header nav a[href*='+id+']').classList.add('active')
        }
    )
    }
}
)