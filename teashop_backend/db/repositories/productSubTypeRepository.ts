import ProductSubType from "../models/ProductSubType";
import {IProductSubType, IProductSubTypeBasic} from "../types/IProductSubType";

export async function create(subType: IProductSubType) {
    return await ProductSubType.create(subType);
}

export async function updateBasic({id, name}: IProductSubTypeBasic) {
    return await ProductSubType.update({name}, {where: {id}});
}

export async function findByTypeId(productTypeId: string) {
    return await ProductSubType.findAll({where: {productTypeId}});
}

export async function removeById(id: string) {
    return await ProductSubType.destroy({where: {id}});
}