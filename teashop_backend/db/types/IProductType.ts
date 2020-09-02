import {IProductSubType} from "./IProductSubType";

export interface IProductType {
    name: string
    subtypes?: IProductSubType[]
}