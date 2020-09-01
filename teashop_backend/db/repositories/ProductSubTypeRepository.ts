import ProductSubType from "../models/ProductSubType";
import {IProductSubType} from "../types/IProductSubType";

export async function create(productTypeId: string, subType: IProductSubType) {
    return await ProductSubType.create({...subType, productTypeId});
}

export async function updateById(id: string, name:string) {
    return await ProductSubType.update({name}, {where: {id}});
}

export async function removeById(id:string) {
    return await ProductSubType.destroy({where:{id}});
}