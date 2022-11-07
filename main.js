let secret = document.getElementById("secret");
let msg = document.getElementById("message");
let msg2 = document.getElementById("message2");
let lines = document.getElementById("lines");
let clicked = false;

secret.addEventListener("click", function () {
  if (clicked) {
    msg2.style.display = "none";
    secret.style.display = "block";
    lines.style.display = "block";
    clicked = false;
  } else {
    clicked = true;
    msg.style.display = "block";
    secret.style.display = "none";
    lines.style.display = "none";
    setTimeout(() => {
        msg.style.display = "none";
        msg2.style.display = "block";
        setTimeout(() => {
        msg2.style.display = "none";
        secret.style.display = "block";
        lines.style.display = "block";
        clicked = false;
      }, 3000);
    }, 2000);
  }
});
