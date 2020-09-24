import {IProductType} from "./IProductType";
import {IProductSubType} from "./IProductSubType";
import {IFile} from "./IFile";
import Order from "../db/sequelizeModels/Order";
import {IProductOrder} from "./IProductOrder";

export interface IProductBasic {
    weight: number
    shortDescription: string
    price: number
    discount?: number
    productTypeId?: string
    productSubTypeId?: string
    effect?: string
    packaging?: string
    taste?: string
}

export interface IProduct extends IProductBasic{
    id?:string
    productType?: IProductType
    productSubType?: IProductSubType
    files: IFile[]
    orders?: Array<Order & { ProductOrder: IProductOrder }>
}