import ProductType from "../models/ProductType";
import ProductSubType from "../models/ProductSubType";
import {IProductType} from "../types/IProductType";
import {IProductSubType} from "../types/IProductSubType";

export async function create(productType: IProductType) {
    return await ProductType.create(productType,
        {include: [{model: ProductSubType}]});
}

export async function findById(productTypeId: string) {
    return await ProductType.findByPk(productTypeId, {include: [{model: ProductSubType}]});
}

export async function updateById(id: string, name: string) {
    return await ProductType.update({name}, {where: {id}});
}

export async function findAll() {
    return await ProductType.findAll({include: [{model: ProductSubType}]});
}

export async function bulkSubtype(productTypeId: string, subTypes: IProductSubType[]) {
    const subTypesToPush = subTypes.map(props => ({...props, productTypeId}));
    return await ProductSubType.bulkCreate(subTypesToPush,
        {returning: true, validate: true});
}

export async function removeById(id: string) {
    return await ProductType.destroy({where: {id}});
}