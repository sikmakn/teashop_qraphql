import * as productSubTypeService from '../../services/productSubTypeService';
import {IProductSubType, IProductSubTypeBasic} from '../../db/types/IProductSubType';

export const resolvers = {
    Query: {
        productSubTypes: async (root: any, {typeId}: any) => await productSubTypeService.findByTypeId(typeId),
        productSubType: async (root: any, {id}: any) => await productSubTypeService.findById(id),
    },
    Mutation: {
        addProductSubType: async (root: any, {productSubType}: { productSubType: IProductSubType }) =>
            await productSubTypeService.create(productSubType),
        removeProductSubType: async (root: any, {id}: { id: string }) =>
            await productSubTypeService.remove(id),
        updateProductSubType: async (root: any, {productSubType}: { productSubType: IProductSubTypeBasic }) => {
            await productSubTypeService.updateBasic(productSubType);
            return true;
        }
    }
};