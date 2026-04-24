
let termekszam = parseInt(localStorage.getItem("termekszam")) || 0;
let amount = parseInt(localStorage.getItem("amount")) || 0;


function addToCart(price) {
    termekszam += 1;
    amount += price;

    localStorage.setItem("termekszam", termekszam);
    localStorage.setItem("amount", amount);

    alert("Termék hozzáadva a kosárhoz!");
    updateUI();
}

function updateUI() {
    const termekElem = document.getElementById("termekszam");
    const amountElem = document.getElementById("amount");

    if (termekElem) termekElem.innerHTML = termekszam;
    if (amountElem) amountElem.innerHTML = amount + " ft";
}

document.addEventListener("DOMContentLoaded", () => {
    updateUI();

    const btn3000 = document.getElementById("npfey-3000-bojlerbutton");
    if (btn3000) {
        btn3000.onclick = () => {
            const price = Number(document.getElementById("price3000npfey").innerText);
            addToCart(price);
        };
    }

    const btnLuxury = document.getElementById("npfey-luxury-bojlerbutton");
    if (btnLuxury) {
        btnLuxury.onclick = () => {
            const price = Number(document.getElementById("priceluxurynpfey").innerText);
            addToCart(price);
        };
    }

    const btnMini = document.getElementById("npfey-mini-bojlerbutton");
    if (btnMini) {
        btnMini.onclick = () => {
            const price = Number(document.getElementById("pricemininpfey").innerText);
            addToCart(price);
        };
    }

    const checkoutBtn = document.getElementById("checkout");
    if (checkoutBtn) {
        checkoutBtn.onclick = () => window.location.href = "checkout.html";
    }

    const orderBtn = document.getElementById("order");
    if (orderBtn) {
        orderBtn.onclick = () => {
            alert("Köszönjük a vásárlást!");
            localStorage.clear();
            window.location.href = "fooldal.html";
        };
    }
});