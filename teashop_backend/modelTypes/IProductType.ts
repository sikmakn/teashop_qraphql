import {IProductSubType} from "./IProductSubType";

export interface IProductType {
    id?:string
    name: string
    productSubTypes?: IProductSubType[]
}

export interface IProductTypeBasic {
    id:string
    name:string
}