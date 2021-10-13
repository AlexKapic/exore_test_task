import { Http } from "./http.service";
import { Products } from "./products.service";

const http = new Http();
const products = new Products({ http });

export { products };
