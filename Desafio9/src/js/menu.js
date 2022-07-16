//let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

function openMenu() {
    if(!menuSection.classList.contains("on")) {
        menuSection.classList.add("on")
        document.body.style.overflow = "hidden"
    } else if(menuSection.classList.contains("on")) {
        menuSection.classList.remove("on")
        document.body.style.overflow = "initial";
    }
}

//menuToggle.addEventListener("click", () => {
 //   document.body.style.overflow = show ? "hidden" : "initial";
 //   menuSection.classList.toggle("on", show);
 //   show = !show;
//})

function linkClick() {
    document.body.style.overflow = "initial";
    if(menuSection.classList.contains("on")) {
        menuSection.classList.remove("on")
    }
}
