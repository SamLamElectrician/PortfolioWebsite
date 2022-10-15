const button = document.querySelector(".menu-collapsed");

button.addEventListener("click", () => {
  button.classList.toggle("menu-expanded");
});

function contact(event) {
  event.preventDefault();

  emailjs
    .sendForm(
      "service_1xou5c7",
      "template_p68bvop",
      event.target,
      "8X5aCUiGHuFKNdN71"
    )
    .then(() => {
      console.log("hello world");
      loading();
    })
    .catch(() => {
      alert(
        "email is temporarily unavailable. Please contact me on Sammylam505@gmail.com"
      );
    });
}
