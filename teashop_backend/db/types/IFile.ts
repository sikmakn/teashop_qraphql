import {IProduct} from "./IProduct";

export interface IFile {
    id?: string
    type: string
    size: number
    name: string
    data: Blob
    productId?: string
    product?: IProduct
}