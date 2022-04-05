document.addEventListener("scroll", () => {
  const navBar = document.querySelector("#top-nav-bar");
  if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
});