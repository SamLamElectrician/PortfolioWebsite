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
      console.log("hello");
    })
    .catch(() => {
      alert(
        "email is temporarily unavailable. Please contact me on Sammylam505@gmail.com"
      );
    });
}
