const navBarManagement = () => {
  const navBar = document.querySelector("#top-nav-bar");
  const textLinks = document.querySelectorAll(".text-link");
  const navLogo = document.querySelector("#nav-logo");
  const navContent = document.querySelector("#nav-content");
  
  if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
    navBar.classList.add("scrolled");
    navLogo.style.justifyContent = "flex-start";
    navContent.style.display = "flex";
    if (window.innerWidth > 600) {
      textLinks.forEach((textLink) => {
        textLink.style.display = "block";
      });   
    }
  }
  else {
    navBar.classList.remove("scrolled");
    navLogo.style.justifyContent = "center";
    navContent.style.display = "block";
    textLinks.forEach((textLink) => {
      textLink.style.display = "none";
    });
  }
}

navBarManagement();
document.addEventListener("scroll", navBarManagement);