const ProductManager = require("./ProductManager");

const manager = new ProductManager();

manager.addProducts({id:1, name:"Teclado" ,description:"Teclado Mecanico", price: 25000, stock: 25});
manager.addProducts({id:2, name:"Mause" ,description:"Mause 206", price: 25000, stock: 10});
manager.addProducts({name:"Teclado" ,description:"Teclado Kumara", price: 30000, stock: 20});
manager.addProducts({id:3, name:"Teclado" ,description:"Teclado Kumara", price: 30000, stock: 20});
manager.addProducts({id:3, name:"Teclado" ,description:"Teclado Kumara", price: 30000, stock: 20});



const productos = manager.getProducts();
console.table(productos);
