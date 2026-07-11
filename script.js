// ===============================
// EFECTO MENÚ AL HACER SCROLL
// ===============================

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#9c7ad8";
        header.style.padding = "5px 0";
    } else {
        header.style.background = "#b39ddb";
        header.style.padding = "0";
    }
});

// ===============================
// ANIMACIÓN AL HACER SCROLL
// ===============================

const elementos = document.querySelectorAll(
    ".producto, .galeria-grid img, .nosotros, .redes"
);

const mostrarElementos = () => {
    elementos.forEach((elemento) => {
        const posicion = elemento.getBoundingClientRect().top;

        if (posicion < window.innerHeight - 100) {
            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0)";
        }
    });
};

elementos.forEach((elemento) => {
    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(50px)";
    elemento.style.transition = "0.8s ease";
});

window.addEventListener("scroll", mostrarElementos);
mostrarElementos();

// ===============================
// BOTÓN VOLVER ARRIBA
// ===============================

const botonArriba = document.createElement("button");

botonArriba.innerHTML = "↑";
botonArriba.id = "btnArriba";

document.body.appendChild(botonArriba);

Object.assign(botonArriba.style, {
    position: "fixed",
    bottom: "100px",
    right: "25px",
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    border: "none",
    background: "#b39ddb",
    color: "#fff",
    fontSize: "28px",
    cursor: "pointer",
    display: "none",
    boxShadow: "0 5px 15px rgba(0,0,0,.3)",
    transition: ".3s"
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        botonArriba.style.display = "block";
    } else {
        botonArriba.style.display = "none";
    }
});

botonArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ===============================
// EFECTO EN TARJETAS
// ===============================

const tarjetas = document.querySelectorAll(".producto");

tarjetas.forEach((tarjeta) => {

    tarjeta.addEventListener("mouseenter", () => {
        tarjeta.style.transform = "translateY(-10px) scale(1.03)";
    });

    tarjeta.addEventListener("mouseleave", () => {
        tarjeta.style.transform = "translateY(0) scale(1)";
    });

});

// ===============================
// AÑO AUTOMÁTICO EN FOOTER
// ===============================

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        `© ${new Date().getFullYear()} Aura Indumentaria - Todos los derechos reservados.`;
}

console.log("Aura Indumentaria cargada correctamente.");
