import {IProductType} from "./IProductType";

export interface IProductSubType {
    id?: string
    name: string
    productTypeId: string
    productType?: IProductType
}

export interface IProductSubTypeBasic {
    id: string
    name: string
}