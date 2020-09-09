import * as productTypeRepository from '../db/repositories/productTypeRepository';
import {IProductType} from "../db/types/IProductType";

export async function create(productType: IProductType) {
    return await productTypeRepository.create(productType);
}

export async function findAll() {
    return await productTypeRepository.findAll();
}

export async function findById(id: string) {
    return await productTypeRepository.findById(id);
}

export async function getSubTypes(productTypeId: string) {
    return (await productTypeRepository.findById(productTypeId))?.productSubTypes;
}