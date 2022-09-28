const btn = document.querySelector(".submit");

btn.addEventListener("click", () => {
  let user_input = document.querySelector("#input");
  if (user_input.value != "") {
    if (document.querySelector(".qr-code").childElementCount == 0) {
      generate(user_input);
    } else {
      document.querySelector(".qr-code").innerHTML = "";
      generate(user_input);
    }
  } else {
    document.querySelector(".qr-code").style = "display: none";
  }
});

function generate(user_input) {
  document.querySelector(".qr-code").style = "";

  var qrcode = new QRCode(document.querySelector(".qr-code"), {
    text: `${user_input.value}`,
    width: 180, //128
    height: 180,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
}
