import * as productTypeService from '../../services/productTypeService';
import {IProductType, IProductTypeBasic} from '../../db/types/IProductType';

export const resolvers = {
    Query: {
        getProductType: async (root: any, {id}: { id: string }) => await productTypeService.findById(id),
        getAllProductTypes: async () => (await productTypeService.findAll())
            .map(({id, name, productSubTypes}) =>
                ({id, name, productSubTypes})),
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