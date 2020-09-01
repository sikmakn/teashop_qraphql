import {IProductSubType} from "./IProductSubType";

export default interface IProductType {
    name: string
    subtypes?: IProductSubType[]
}