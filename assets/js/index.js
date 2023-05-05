import {traerTienda,Producto} from "./utils.js";

const containerLista1 = document.querySelector(".container");

const render = async () => {
    const data = await traerTienda();
    console.log(data);

    for (let item of data) {
        let cloth = new Producto (item.image, item.id);
        const renderItem = cloth.render();
        containerLista1.appendChild(renderItem);

        cloth.addClickListener();


    }

}



render();


