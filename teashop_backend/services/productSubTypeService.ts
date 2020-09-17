import ProductSubType from '../db/models/ProductSubType'
import connection from '../db/connection';
import {IProductSubType, IProductSubTypeBasic} from "../db/types/IProductSubType";
import ProductType from "../db/models/ProductType";

const productSubTypeRepository = connection.getRepository(ProductSubType);
const productTypeRepository = connection.getRepository(ProductType);

export async function create(productSubType: IProductSubType) {
    return await productSubTypeRepository.create(productSubType);
}

export async function findById(id: string) {
    return await productSubTypeRepository.findByPk(id, {include: [productTypeRepository]});
}

export async function findByTypeId(productTypeId: string) {
    return await productSubTypeRepository.findAll({
        where: {productTypeId},
        include: [productTypeRepository]
    });
}

export async function updateBasic({name, id}: IProductSubTypeBasic) {
    return await productSubTypeRepository.update({name}, {where: {id}});
}

export async function remove(id: string) {
    return await productSubTypeRepository.destroy({where: {id}});
}