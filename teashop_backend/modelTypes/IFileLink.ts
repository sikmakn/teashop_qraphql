import {IProduct} from "./IProduct";

export interface IFileLink {
    id?: string
    link: string
    productId?: string
    product?: IProduct
}