import fs from 'fs';
import { describe } from 'node:test';

    


class CarritoManager {

    #products = [];
    #path = 'carritos.json'

    constructor () {
        //this.#products = [];
      /*  if(fs.existsSync(this.#path)){
            const lecturaProductos = fs.readFileSync(this.#path,'utf-8')
            this.#products = JSON.parse(lecturaProductos);
            return this.#products;
        } else {
            fs.writeFileSync(this.#path, '[]', 'utf-8');
            console.log("Archivo Creado");
        }*/
    }
    
    addProductToCarrito(id_carrito, id_product, data){

        let carritoAct = [];
        const {quantity} = data;

        if(fs.existsSync(this.#path)){
            const lecturaCarritos = fs.readFileSync(this.#path,'utf-8')
            this.#products = JSON.parse(lecturaCarritos);
            const existe = this.#products.find((carrito) => carrito.id === id_carrito);
            if(existe) {
                const existeP = this.#products.products.find((product) => product.id === id_product);
                if(existeP){
                    existeP.quantity += quantity || 1;
                } else {
                    this.#products.products.push({id: id_product, quantity: quantity || 1});
                }
                fs.writeFileSync(this.#path, JSON.stringify(this.#products, null, 2), 'utf-8');
            } else {
                console.log("No se encuentra ese ID de Carrito");
            }

        } else {
            console.log("No se puede abrir el archivo");
        }
    }
   
    addCarrito(carritoNuevo){

        this.products = [];
        let nuevoCarrito = [];

        const existeFile = fs.existsSync(this.#path);

        if(!existeFile){

            fs.writeFileSync(this.#path, '[]', 'utf-8');
            console.log("El archivo no existia pero ya fue creado");
            const lecturaProductos = fs.readFileSync(this.#path,'utf-8')
            this.#products = JSON.parse(lecturaProductos);
        } else {
            const lecturaProductos = fs.readFileSync(this.#path,'utf-8')
            this.#products = JSON.parse(lecturaProductos);
        }
        nuevoCarrito ={
            id: this.#products.length +1,
            products: []
        }
        this.#products.push(nuevoCarrito);
        fs.writeFileSync(this.#path, JSON.stringify(this.#products, null, 2), 'utf-8');
        return nuevoCarrito;
    }


    getCarritoByID(idBuscado) {//let id_e;
        let number_id, id_e;
        let carrito_e = [];
        if(fs.existsSync(this.#path)){
            const lecturaProductos = fs.readFileSync(this.#path,'utf-8')
            this.#products = JSON.parse(lecturaProductos);
            //return this.#products;
            carrito_e = [...this.#products];
            const encontrado = carrito_e.findIndex( carrito => carrito.id === idBuscado);

            if(encontrado !== -1){
                id_e = true;
            }
            if(id_e) {
                console.log(carrito_e[encontrado])
                return carrito_e[encontrado];
            } else {
                console.log("Not Found");
            }
        } else {
            console.log("No se pudo leer archivo. Verificar que el archivo exista");
        }
    }

}



export default CarritoManager; //define como export default productmanager
