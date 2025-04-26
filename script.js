let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      //   navlinks.forEach((links) => {
      //     links.classList.remove("active");
      //     document.querySelector("header nav a [href*=" + id + " ]").classList.add("active");
      //   });
      navlinks.forEach((link) => {
        link.addEventListener("click", () => {
          navlinks.forEach((otherLink) => {
            otherLink.classList.remove("active");
          });
          link.classList.add("active");
          navbar.classList.remove("active"); // add this line
        });
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
