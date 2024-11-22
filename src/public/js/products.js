const productsList = document.getElementById("products-list");
const btnRefreshProductsList = document.getElementById("btn-refresh-products-list");

const loadProductsList = async () => {
    const response = await fetch ("/api/products" , {method: "GET"});
    const data = await response.json();
    const products = data.payload || [];

    productsList.innerText = "";

    products.forEach((product) => {
        productsList.innerHTML += `<li>
        Id: ${product.id} - 
        Nombre: ${product.title} - 
        Descripción: ${product.description} - 
        Código: ${product.code} - 
        Precio: ${product.price} -
        Estado: ${product.status} - 
        Stock: ${product.stock} - 
        Categoria: ${product.category} - 
        </li>`;
    });

};

btnRefreshProductsList.addEventListener("click", () =>{
    loadProductsList();
    console.log("Lista recargada");
});

loadProductsList();