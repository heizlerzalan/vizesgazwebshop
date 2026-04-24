const termekszam=localStorage.getItem("termek");
const amount=localStorage.getItem("amount");
document.getElementById("termekszam").innerHTML=termekszam;
document.getElementById("amount").innerHTML=amount;

document.getElementById("checkout").onclick=function(){
    window.location.href="checkout.html";
}

document.getElementById("order").onclick=function(){
    alert("Köszönjük a vásárlást!");
    window.location.href="fooldal.html";
}
