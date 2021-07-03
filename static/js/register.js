const handleRegister = (event) => {
  clearTimeout();
  event.preventDefault();

  console.log({
    username: event.target.username.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
  });

  let cardNotif = document.querySelector(".card-notif");

  fetch("https://uta-express-mailer.herokuapp.com/api/register", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.success) {
        cardNotif.style.display = "flex";
        cardNotif.innerHTML = `Register done`;
      } else {
        cardNotif.style.display = "flex";
        cardNotif.style.borderRight = "5px solid red";
        cardNotif.innerHTML = `Register fail`;
      }
    })
    .catch();

  setTimeout(() => {
    cardNotif.style.display = "none";
  }, 3000);
};
