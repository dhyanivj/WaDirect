const userNumber = document.querySelector('.userNumber');
const whatsappButton = document.querySelector('.whatsappButton');

whatsappButton.onclick = function () {
  const wa = `https://api.whatsapp.com/send/?phone=91${userNumber.value}`;
  console.log(wa);
  window.open(wa)
};
