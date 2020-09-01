import IProductDescription from "./IProductDescription";
import IProductType from "./IProductType";
import {IProductSubType} from "./IProductSubType";
import IFile from "./IFile";

export default interface IProduct {
    weight: number
    shortDescription: string
    inStock: boolean
    price: number
    discount: number
    productType?: IProductType
    productSubType?: IProductSubType
    files: IFile[]
    descriptions: IProductDescription[]
}