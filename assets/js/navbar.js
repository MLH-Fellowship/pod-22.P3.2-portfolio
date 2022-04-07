const navBarManagement = () => {
  const navBar = document.querySelector("#top-nav-bar");
  const textLinks = document.querySelectorAll(".text-link");
  const navLogo = document.querySelector("#nav-logo");
  const navContent = document.querySelector("#nav-content");
  const burgerIcon = document.querySelector(".hamburger-lines ");

  if (
    document.body.scrollTop >= 10 ||
    document.documentElement.scrollTop >= 10
  ) {
    navBar.classList.add("scrolled");
    navLogo.style.justifyContent = "flex-start";
    navContent.style.display = "flex";
    if (window.innerWidth > 600) {
      burgerIcon.classList.remove("showHamburgerLines");
      textLinks.forEach((textLink) => {
        textLink.style.display = "block";
      });
    } else {
      burgerIcon.classList.add("showHamburgerLines");
      textLinks.forEach((textLink) => {
        textLink.style.display = "none";
      });
    }
  } else {
    burgerIcon.classList.remove("showHamburgerLines");
    navBar.classList.remove("scrolled");
    navLogo.style.justifyContent = "center";
    navContent.style.display = "block";
    textLinks.forEach((textLink) => {
      textLink.style.display = "none";
    });
  }
};

navBarManagement();
document.addEventListener("scroll", navBarManagement);
window.addEventListener("resize", navBarManagement);
