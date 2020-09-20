import ProductSubType from '../db/sequelizeModels/ProductSubType'
import connection from '../db/connection';
import {IProductSubType, IProductSubTypeBasic} from "../modelTypes/IProductSubType";
import ProductType from "../db/sequelizeModels/ProductType";

const productSubTypeRepository = connection.getRepository(ProductSubType);
const productTypeRepository = connection.getRepository(ProductType);

export async function create(productSubType: IProductSubType) {
    return await productSubTypeRepository.create(productSubType);
}

export async function bulk(productSubTypes: [IProductSubType]) {
    return await productTypeRepository.bulkCreate(productSubTypes);
}

export async function updateBasic({name, id}: IProductSubTypeBasic) {
    return await productSubTypeRepository.update({name}, {where: {id}});
}

export async function remove(id: string) {
    return await productSubTypeRepository.destroy({where: {id}});
}