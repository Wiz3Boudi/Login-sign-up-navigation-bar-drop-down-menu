const dropdownMenu = document.getElementById("dropdown-menu"),
      linkClick = document.getElementById("link-click"),
      closeMenu = document.getElementById("close"),
      home = document.getElementById("Home");

window.addEventListener("load", (e) => {
      home.classList.toggle("active");
});
// home.classList.toggle('active');
linkClick.addEventListener("click", function () {
      dropdownMenu.style.display = "block";
});
closeMenu.addEventListener("click", (e) => {
      dropdownMenu.style.display = "none";
});
