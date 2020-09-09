import {IProductSubType} from "./IProductSubType";

export interface IProductType {
    id?:string
    name: string
    subtypes?: IProductSubType[]
}