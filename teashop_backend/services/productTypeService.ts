import ProductType from '../db/models/ProductType';
import {IProductType, IProductTypeBasic} from "../db/types/IProductType";
import connection from '../db/connection';
import ProductSubType from "../db/models/ProductSubType";

const productTypeRepository = connection.getRepository(ProductType);
const productSubTypeRepository = connection.getRepository(ProductSubType);

export async function create(productType: IProductType) {
    return await productTypeRepository.create(productType);
}

export async function findAll() {
    return await productTypeRepository.findAll({include: [productSubTypeRepository]});
}

export async function findById(id: string) {
    return await productTypeRepository.findByPk(id,{include: [productSubTypeRepository]}) ;
}

export async function getSubTypes(productTypeId: string) {
    return (await productTypeRepository.findByPk(productTypeId))?.productSubTypes;
}

export async function updateBasic({name, id}: IProductTypeBasic) {
    return await productTypeRepository.update({name}, {where: {id}});
}

export async function remove(id: string) {
    return await productTypeRepository.destroy({where: {id}});
}