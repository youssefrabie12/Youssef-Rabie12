const menuIcon= document.querySelector("#menu-icon");
const navBar= document.querySelector(".navbar");
const sections= document.querySelectorAll("section");
const navLinks= document.querySelectorAll("header nav a");
const Nameinput= document.getElementById("name");
const Numinput= document.getElementById("num");
const Emailinput= document.getElementById("email");
const Subinput= document.getElementById("sub");
const textArea= document.querySelector(".contact form textarea");
const btn= document.querySelector(".contact form .btn");

window.onscroll= ()=> {
    sections.forEach(sec => {
        let top= window.scrollY;
        let offset= sec.offsetTop - 150;
        let height= sec.offsetHeight;
        let id= sec.getAttribute("id");

        if (top>=offset && top<offset+height){
            navLinks.forEach(links => {
                links.classList.remove("active");
            })
        }
    })
}
menuIcon.onclick= ()=> {
    menuIcon.classList.toggle("bx-x");
    navBar.classList.toggle("active");
}

let q= {
    Name: Nameinput.value,
    Email: Emailinput.value,
    Sub: Subinput.value,
    Num: Numinput.value,
    Mes: textArea.value
}
qs= [];

let i= 0;
btn.addEventListener("click", ()=> {
    i++;
    qs.push(q);
    localStorage.setItem(JSON.stringify(i), JSON.stringify(qs));
})