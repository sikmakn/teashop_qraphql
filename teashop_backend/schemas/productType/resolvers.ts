import * as productTypeService from '../../services/productTypeService';
import * as productSubTypeService from '../../services/productSubTypeService';
import {IProductType, IProductTypeBasic} from '../../db/types/IProductType';

export const resolvers = {
    Query: {
        productType: async (root: any, {id}: any) => await productTypeService.findById(id),
        productTypes: async () => await productTypeService.findAll(),
    },
    ProductType: {
        productSubTypes: async ({productSubTypes, id}: any) => {
            if (productSubTypes) return productSubTypes;
            return await productSubTypeService.findByTypeId(id);
        },
    },
    ProductSubType: {
        productType: async ({productTypeId, productType}: any) => {
            if (productType) return productType;
            return await productTypeService.findById(productTypeId);
        }
    },
    Mutation: {
        addProductType: async (root: any, {productType}: { productType: IProductType }) =>
            await productTypeService.create(productType),
        removeProductType: async (root: any, {id}: { id: string }) =>
            await productTypeService.remove(id),
        updateProductType: async (root: any, {productType}: { productType: IProductTypeBasic }) => {
            await productTypeService.updateBasic(productType);
            return true;
        }
    }
};