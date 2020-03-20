var link = document.querySelector(".modal-open");

var popup = document.querySelector(".modal");

var form = popup.querySelector("form");
var email = popup.querySelector("input[name=email]");


var close = document.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-active");
  popup.classList.remove("modal-close-animation");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-close-animation");
  popup.classList.remove("modal-active");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!email.value) {
      evt.preventDefault();
      popup.classList.add("modal-error");
      alert("Не заполнено поле e-mail");
    }
  });
