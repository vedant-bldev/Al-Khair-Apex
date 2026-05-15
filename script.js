
function sendToWhatsApp(event){
event.preventDefault();

const name=document.getElementById('name').value;
const phone=document.getElementById('phone').value;
const amount=document.getElementById('amount').value;
const city=document.getElementById('city').value;
const loan=document.getElementById('loan').value;

const msg=`Assalamualaikum, I want to apply for Islamic Finance.%0A%0AName: ${name}%0APhone: ${phone}%0ALoan Amount: ${amount}%0ACity: ${city}%0ALoan Type: ${loan}`;

window.open(`https://wa.me/917672818458?text=${msg}`,'_blank');
}
