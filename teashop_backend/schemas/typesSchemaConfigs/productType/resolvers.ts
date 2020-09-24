import * as productTypeService from '../../../services/productTypeService';
import {IProductTypeBasic} from '../../../modelTypes/IProductType';
import joinMonster from "join-monster";
import {query} from "../../../db/connection";

const resolvers = {
    Query: {
        productType: async (root: any, args: any, ctx: any, info: any) =>
            await joinMonster(info, ctx,
                (sql: string) => query(sql),
                {dialect: "mysql"}),
        productTypes: async (root: any, args: any, ctx: any, info: any) =>
            await joinMonster(info, ctx,
                (sql: string) => query(sql),
                {dialect: "mysql"}),
    },
    Mutation: {
        addProductType: async (root: any, {productType}: any) => await productTypeService.create(productType),
        removeProductType: async (root: any, {id}: { id: string }) => {
            const result = await productTypeService.remove(id);
            return result !== 0;
        },
        updateProductType: async (root: any, {productType}: { productType: IProductTypeBasic }) => {
            const result = await productTypeService.updateBasic(productType);
            return result[0] !== 0;
        }
    }
};

export default resolvers;