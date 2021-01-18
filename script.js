document.getElementById("burger").addEventListener("click", toggleBurger);

function toggleBurger() {
  var links = document.getElementById("links");
  if (links.style.display === "") {
    links.style.display = "block";
  }
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
}
