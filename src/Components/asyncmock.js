const productos = [
    { id: "1", img: "./cerveza-rubia-quilmes.png", nombre: "Cerveza rubia quilmes", precio: 1000, idCat: "2" },
    { id: "2", img: "./coca.png", nombre: "Coca Cola", precio: 2000, idCat: "2" },
    { id: "3", img: "./popcorn.png", nombre: "Popcorn", precio: 800, idCat: "3" },
    { id: "4", img: "./skittles.png", nombre: "Skittles", precio: 500, idCat: "4" }
];

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 100);
    });
};

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productoBuscado = productos.find(item => item.id === id);
            resolve(productoBuscado);
        }, 100);
    });
};

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(item => item.idCat === String(idCategoria)); // Convertimos idCategoria a String
            resolve(productosCategoria);
        }, 100);
    });
};
