import * as productSubTypeRepository from '../db/repositories/productSubTypeRepository';
import {IProductSubType, IProductSubTypeBasic} from "../db/types/IProductSubType";

export async function create(productSubType: IProductSubType) {
    return await productSubTypeRepository.create(productSubType);
}

export async function findByTypeId(id:string) {
    return await productSubTypeRepository.findByTypeId(id);
}

export async function updateBasic(productSubType: IProductSubTypeBasic) {
    return (await productSubTypeRepository.updateBasic(productSubType));
}

export async function remove(id: string) {
    return await productSubTypeRepository.removeById(id);
}