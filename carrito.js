
const telefono = "18493867478";

const productos = [
    {
        nombre: "Pastelito de pollo",
        precio: 85,
        imagen: "imagenes/pastelito de pollo.jpg",
        descripcion: "Delicioso relleno de pollo."
    },
    {
        nombre: "Pastelito de res",
        precio: 85,
        imagen: "imagenes/pastelito de res.jpg",
        descripcion: "Relleno de carne de res."
    },
    {
        nombre: "Pastelito de queso",
        precio: 80,
        imagen: "imagenes/pastelito de queso.jpg",
        descripcion: "Suave y delicioso queso."
    },
    {
        nombre: "Pastelito de jamón y queso",
        precio: 85,
        imagen: "imagenes/pastelito jamon y queso.jpg",
        descripcion: "Una deliciosa combinación."
    },
    {
        nombre: "Pastelito de pizza",
        precio: 90,
        imagen: "imagenes/pastelito de pizza.jpg",
        descripcion: "Todo el sabor de la pizza."
    },
    {
        nombre: "Pastelito de cerdo",
        precio: 85,
        imagen: "imagenes/pastelito de cerdo.jpg",
        descripcion: "Relleno de carne de cerdo."
    },
    {
        nombre: "Pastelito de vegetales",
        precio: 80,
        imagen: "imagenes/pastelito de vegetales.jpg",
        descripcion: "Relleno de vegetales."
    },
    {
        nombre: "Pastelito de maíz",
        precio: 80,
        imagen: "imagenes/pastelito de maiz.jpg",
        descripcion: "Delicioso relleno de maíz."
    },
    {
        nombre: "Pastelito de pollo y queso",
        precio: 90,
        imagen: "imagenes/pastelito de pollo y queso.jpg",
        descripcion: "Pollo combinado con queso."
    },
    {
        nombre: "Pastelito de res y queso",
        precio: 90,
        imagen: "imagenes/pastelito de res y queso.jpg",
        descripcion: "Carne de res y queso."
    },
    {
        nombre: "Pastelito de salami",
        precio: 80,
        imagen: "imagenes/pastelito de salami.jpg",
        descripcion: "Relleno de salami."
    },
    {
        nombre: "Pastelito de jamón",
        precio: 80,
        imagen: "imagenes/pastelito de jamon.jpg",
        descripcion: "Delicioso relleno de jamón."
    },
    {
        nombre: "Pastelito de camarones",
        precio: 110,
        imagen: "imagenes/pastelito de camarones.jpg",
        descripcion: "Relleno de camarones."
    },
    {
        nombre: "Pastelito de atún",
        precio: 90,
        imagen: "imagenes/pastelito de atun.jpg",
        descripcion: "Delicioso relleno de atún."
    },
    {
        nombre: "Pastelito de yuca",
        precio: 85,
        imagen: "imagenes/pastelito de yuca.jpg",
        descripcion: "Preparado con yuca."
    },
    {
        nombre: "Pastelito de plátano maduro",
        precio: 90,
        imagen: "imagenes/pastelito de platano maduro.jpg",
        descripcion: "Con el dulce sabor del plátano maduro."
    },
    {
        nombre: "Pastelito de tres quesos",
        precio: 100,
        imagen: "imagenes/pastelito de tres queso.jpg",
        descripcion: "Una mezcla de tres quesos."
    },
    {
        nombre: "Pastelito de pollo picante",
        precio: 90,
        imagen: "imagenes/pastelito de pollo picante.jpg",
        descripcion: "Pollo con un toque picante."
    },
    {
        nombre: "Pastelito de chorizo",
        precio: 90,
        imagen: "imagenes/pastelito de chorizo.jpg",
        descripcion: "Relleno de chorizo."
    },
    {
        nombre: "Pastelito especial de la casa",
        precio: 125,
        imagen: "imagenes/pastelito especial de la casa.jpg",
        descripcion: "La especialidad de nuestra casa."
    }
];

const listaProductos = document.getElementById("lista-productos");

productos.forEach((producto, indice) => {

    listaProductos.innerHTML += `
        <div class="producto">

            <div class="imagen-producto">
                <img
                    src="${producto.imagen}"
                    alt="${producto.nombre}"
                    loading="lazy"
                    onerror="this.alt='Imagen no encontrada'; this.style.display='none';">
            </div>

            <h3>${producto.nombre}</h3>

            <p>${producto.descripcion}</p>

            <p class="precio">
                RD$${producto.precio}
            </p>

            <button onclick="comprarProducto(${indice})">
                Pedir por WhatsApp
            </button>

        </div>
    `;
});

function comprarProducto(indice) {

    const producto = productos[indice];

    const mensaje =
        `Hola, Pastelitos Delicias. Quiero pedir: ${producto.nombre}. Precio: RD$${producto.precio}.`;

    const enlace =
        `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(enlace, "_blank");
}

function pedirPorWhatsApp() {

    const mensaje =
        "Hola, Pastelitos Delicias. Quiero información sobre sus pastelitos.";

    const enlace =
        `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(enlace, "_blank");
}
