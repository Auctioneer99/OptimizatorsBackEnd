import ProductionMatrix from "./libs/Game/ProdMatrix/ProductionMatrix.js";
import Resource from "./libs/Game/ProdMatrix/Resource/Resource.js";
import Production from "./libs/Game/ProdMatrix/Production/Production.js";

let pm = new ProductionMatrix();

pm.addResource(new Resource("Iron", "kg"));
pm.addProduct(new Production("Sword", "2000"), 200, 10);
pm.addResource(new Resource("Wood", "kg"));
pm.addResource(new Resource("Leather", "m2"));

console.log(pm.toString());
