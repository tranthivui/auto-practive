import {test as base} from "@playwright/test";
import { ProductPage } from "../pages/product.page";

export const test=base.extend<{product:ProductPage}>({
    product: async({page},use)=>{
        const product=new ProductPage(page);
        await use(product);
    }
})