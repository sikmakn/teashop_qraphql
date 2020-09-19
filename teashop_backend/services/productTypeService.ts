import ProductType from '../db/sequelizeModels/ProductType';
import {IProductType, IProductTypeBasic} from "../db/types/IProductType";
import connection from '../db/connection';
import ProductSubType from "../db/sequelizeModels/ProductSubType";

const productTypeRepository = connection.getRepository(ProductType);
const productSubTypeRepository = connection.getRepository(ProductSubType);

export async function create(productType: IProductType) {
    return await productTypeRepository.create(productType, {include:[productSubTypeRepository]});
}

export async function updateBasic({name, id}: IProductTypeBasic) {
    return await productTypeRepository.update({name}, {where: {id}});
}

export async function remove(id: string) {
    return await productTypeRepository.destroy({where: {id}});
}