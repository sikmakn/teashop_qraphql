import * as productTypeService from '../../services/productService';
import {IProductType} from "../../db/types/IProductType";

export const resolvers = {
    Query: {
        getAllProductTypes: async () => (await productTypeService.findAll())
            .map(({id, name, productSubTypes}) =>
                ({id, name, productSubTypes})),
    },
    Mutation: {
        addProductType: async (productType: IProductType) => await productTypeService.create(productType),
    }
};