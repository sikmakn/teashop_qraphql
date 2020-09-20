import * as productService from '../../../services/productService';
import joinMonster from "join-monster";
import {query} from "../../../db/connection";

const resolvers = {
    Query: {
        product: async (root: any, args: any, ctx: any, info: any) =>
            await joinMonster(info, ctx,
                (sql: string) => query(sql),
                {dialect: "mysql"}),
        productsByIds: async (root: any, args: any, ctx: any, info: any) =>
            await joinMonster(info, ctx,
                (sql: string) => query(sql),
                {dialect: "mysql"}),
        products: async (root: any, args: any, ctx: any, info: any) =>
            await joinMonster(info, ctx,
                (sql: string) => query(sql),
                {dialect: "mysql"}),
    },
    Mutation: {
        addProduct: async (root: any, {product}: any) => await productService.create(product),
        updateProduct: async (root: any, {productBasic}: any) => {
            const result = await productService.updateBasic(productBasic);
            return result[0] !== 0;
        },
        removeProduct: async (root: any, {id}: { id: string }) => {
            const result = await productService.remove(id);
            return result !== 0;
        },
    }
};

export default resolvers;