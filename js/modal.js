var link = document.querySelector(".modal-open");

var popup = document.querySelector(".modal");

var form = popup.querySelector("form");
var email = popup.querySelector("input[name=email]");


var close = document.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-active");
  if (popup.classList.contains("modal-close-animation")) {
    popup.classList.remove("modal-close-animation");
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-close-animation");
  if (popup.classList.contains("modal-error")) {
    popup.classList.remove("modal-error");
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  setTimeout( function () {
    if (popup.classList.contains("modal-active")) {
      popup.classList.remove("modal-active");
    }
  }, 550)
});

form.addEventListener("submit", function (evt) {
    if (!email.value) {
      evt.preventDefault();
      popup.classList.add("modal-error");
      alert("Не заполнено поле e-mail");
    }
  });
