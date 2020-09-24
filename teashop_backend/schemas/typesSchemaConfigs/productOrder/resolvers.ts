import * as productOrderService from '../../../services/productOrderService';
import joinMonster from "join-monster";
import {query} from "../../../db/connection";

const resolvers = {
    Query: {
        productOrderByOrderId: async (root: any, args: any, ctx: any, info: any) =>
            await joinMonster(info, ctx,
                (sql: string) => query(sql),
                {dialect: "mysql"}),
        productOrders: async (root: any, args: any, ctx: any, info: any) =>
            await joinMonster(info, ctx,
                (sql: string) => query(sql),
                {dialect: "mysql"}),
    },
    Mutation: {
        addProductOrder: async (root: any, {productOrder}: any) => await productOrderService.create(productOrder),
        updateProductOrder: async (root: any, {productOrder}: any) => {
            const result = await productOrderService.updateBasic(productOrder);
            return result[0] !== 0;
        },
        removeProductOrder: async (root: any, {primaryKey}: any) => {
            const result = await productOrderService.remove(primaryKey);
            return result !== 0;
        },
    }
};

export default resolvers;