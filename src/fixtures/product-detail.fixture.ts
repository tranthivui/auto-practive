import {test as base} from "@playwright/test";
import { ProductDetail } from "../pages/product-detail.page";

export const test=base.extend<{productDetail:ProductDetail}>({
    productDetail: async({page},use)=>{
        const productDetail=new ProductDetail(page);
        await use(productDetail);
    }
})