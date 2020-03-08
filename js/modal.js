var link = document.querySelector(".modal-open");

var popup = document.querySelector(".modal");
var close = document.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-active")
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-active");
});
