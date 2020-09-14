import {IProductSubType} from "./IProductSubType";

export interface IProductType {
    id?:string
    name: string
    subtypes?: IProductSubType[]
}

export interface IProductTypeBasic {
    id:string
    name:string
}