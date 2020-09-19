import * as productSubTypeService from '../../services/productSubTypeService';
import {IProductSubType, IProductSubTypeBasic} from '../../db/types/IProductSubType';
import joinMonster from "join-monster";
import {query} from '../../db/connection';

export const resolvers = {
    Query: {
        productSubTypes: (root: any, args: any, ctx: any, info: any) =>
            joinMonster(info, ctx, query, {dialect: "mysql"}),
        productSubType: async (root: any, args: any, ctx: any, info: any) =>
            joinMonster(info, ctx, query, {dialect: "mysql"}),
    },
    Mutation: {
        addProductSubType: async (root: any, {productSubType}: { productSubType: IProductSubType }) =>
            await productSubTypeService.create(productSubType),
        bulkProductSubTypes: async (root: any, {productSubTypes}: { productSubTypes: [IProductSubType] }) =>
            await productSubTypeService.bulk(productSubTypes),
        removeProductSubType: async (root: any, {id}: { id: string }) => {
            const result = await productSubTypeService.remove(id);
            return result !== 0;
        },
        updateProductSubType: async (root: any, {productSubType}: { productSubType: IProductSubTypeBasic }) => {
            const result = await productSubTypeService.updateBasic(productSubType);
            return result[0] !== 0;
        }
    }
};