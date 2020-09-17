// import ProductType from "../models/ProductType";
// import ProductSubType from "../models/ProductSubType";
// import {IProductType, IProductTypeBasic} from "../types/IProductType";
// import {IProductSubType} from "../types/IProductSubType";
//
// export async function create(productType: IProductType) {
//     return await ProductType.create(productType,
//         {include: [ProductType.associations.productSubTypes]});
// }
//
// export async function findById(productTypeId: string) {
//     return await ProductType.findByPk(productTypeId, {include: [ProductType.associations.productSubTypes]});
// }
//
// export async function updateBasic({id, name}:IProductTypeBasic) {
//     return await ProductType.update({name}, {where: {id}});
// }
//
// export async function findAll() {
//     return await ProductType.findAll({include: [ProductType.associations.productSubTypes]});
// }
//
// export async function bulkSubtype(productTypeId: string, subTypes: IProductSubType[]) {
//     const subTypesToPush = subTypes.map(props => ({...props, productTypeId}));
//     return await ProductSubType.bulkCreate(subTypesToPush,
//         {returning: true, validate: true});
// }
//
// export async function removeById(id: string) {
//     return await ProductType.destroy({where: {id}});
// }