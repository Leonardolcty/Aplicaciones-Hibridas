class ProductManager {
        products = [];

    constructor(){
        this.products = [];

    }

    addProducts(product){
        if(!product.id || !product.name || !product.description || !product.price || !product.stock){
           console.log("Todos los campos son obligatorios.");
            return;
        }
        if (this.products.find(p => p.id === product.id)) {
            console.log("Error: Id ya está en uso.");
            return;
        }
            return this.products.push(product);
            
    }

    getProducts(){
        return this.products;

    }
    getProductById(id){
        const product = this.products.find(p => p.id === id);
    if(!product){
        console.warn("ProductById Not found.");
        return;
    }
        return product;
    }


}


module.exports = ProductManager;