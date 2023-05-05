const TIENDA = "tienda"

export const traerTienda = async () =>{
    const tienda = sessionStorage.getItem(TIENDA);
    
    if(TIENDA === null){
        alert("la tienda no existe");
        const response = await fetch ("https://fakestoreapi.com/products");
        const product = await response.json();

        const dataString = JSON.stringify(tienda);
        localStorage.setItem(TIENDA, dataString);

        return data;
    } else {
        const dataJSON = JSON.parse(tienda);
        return dataJSON;
    }

    console.log(storage)



    
    return product;
}

export class Producto {
    #imagen = "";
    #id = "";

    constructor(image,id) {
        this.#imagen = image;
        this.#id = id;
    }

    render() {
        const img = document.createElement('img');
        img.src = this.#imagen;
        img.id = "image" + this.#id;
        return img;
    }

    addClickListener() {
        const image = document.querySelector("#image" + this.#id);
        image.addEventListener("click", () => {
            window.location = "/product.html?productId=" + this.#id;
        })
    }
}