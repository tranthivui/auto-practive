import {test as base} from "../fixtures/home-page.fixture";
import { Product } from "../pages/product.page";

export const test=base.extend<{product:Product}>({
    product: async({page},use)=>{
        const product=new Product(page);
        await use(product);
    }
})