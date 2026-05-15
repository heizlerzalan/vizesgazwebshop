let termekszam = parseInt(sessionStorage.getItem("termekszam")) || 0;
let amount = parseInt(sessionStorage.getItem("amount")) || 0;


function addToCart(price) {
    termekszam += 1;
    amount += price;

    sessionStorage.setItem("termekszam", termekszam);
    sessionStorage.setItem("amount", amount);

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
    const btnExtraCool = document.getElementById("npfey-extracool-bojlerbutton");
    if (btnExtraCool) {
        btnExtraCool.onclick = () => {
            const price = Number(document.getElementById("priceextracoolnpfey").innerText);
            addToCart(price);
        };
    }
    const btnpfey30 = document.getElementById("npfey-30-bojlerbutton");
    if (btnpfey30) {
        btnpfey30.onclick = () => {
            const price = Number(document.getElementById("price30npfey").innerText);
            addToCart(price);
        };
    }
    const btntank = document.getElementById("npfey-tank-bojlerbutton");
    if (btntank) {
        btntank.onclick = () => {
            const price = Number(document.getElementById("pricetanknpfey").innerText);
            addToCart(price);
        };
    }
    const btnhajduz120 = document.getElementById("hajdu-z120-bojlerbutton");
    if (btnhajduz120) {
        btnhajduz120.onclick = () => {
            const price = Number(document.getElementById("pricehajduz120npfey").innerText);
            addToCart(price);
        };
    }
    const btnhajduzv120 = document.getElementById("hajdu-zv120-bojlerbutton");
    if (btnhajduzv120) {
        btnhajduzv120.onclick = () => {
            const price = Number(document.getElementById("pricezv120hajdu").innerText);
            addToCart(price);
        };
    }

    const btnAeroFlowMiniProWifi = document.getElementById("AeroFlow-Mini-Pro-Wifibutton");
    if (btnAeroFlowMiniProWifi) {
        btnAeroFlowMiniProWifi.onclick = () => {
            const price = Number(document.getElementById("priceAeroFlowMiniProWifi").innerText);
            addToCart(price);
        };
    }

    const btnNpfey3000Radiator = document.getElementById("npfey-3000-radiatorbutton");
    if (btnNpfey3000Radiator) {
        btnNpfey3000Radiator.onclick = () => {
            const price = Number(document.getElementById("price3000radiatornpfey").innerText);
            addToCart(price);
        };
    }
    const btnNpfeyGamingRadiator = document.getElementById("npfey-gaming-radiatorbutton");
    if (btnNpfeyGamingRadiator) {
        btnNpfeyGamingRadiator.onclick = () => {
            const price = Number(document.getElementById("pricegamingradiatornpfey").innerText);
            addToCart(price);
        };
    }

    const btnNpfeyGamingRadiatorMk2 = document.getElementById("npfey-gaming-radiator-mk2button");
    if (btnNpfeyGamingRadiatorMk2) {
        btnNpfeyGamingRadiatorMk2.onclick = () => {
            const price = Number(document.getElementById("pricegamingradiatormk2npfey").innerText);
            addToCart(price);
        };
    }

        const btnHollandi = document.getElementById("hollandibutton");
        if (btnHollandi) {
            btnHollandi.onclick = () => {
                const price = Number(document.getElementById("price3000npfey").innerText);
                addToCart(price);
            };
        }

        const btnTomito = document.getElementById("tomitobutton");
        if (btnTomito) {
            btnTomito.onclick = () => {
                const price = Number(document.getElementById("price3000npfey").innerText);
                addToCart(price);
            };
        }

        const btnGomboscsap = document.getElementById("gomboscsapbutton");
        if (btnGomboscsap) {
            btnGomboscsap.onclick = () => {
                const price = Number(document.getElementById("price3000npfey").innerText);
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
            sessionStorage.clear();
            window.location.href = "fooldal.html";
        };
    }
});