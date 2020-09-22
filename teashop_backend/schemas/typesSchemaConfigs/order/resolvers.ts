import * as orderService from '../../../services/orderService';
import joinMonster from "join-monster";
import {query} from "../../../db/connection";

const resolvers = {
    Query: {
        order: async (root: any, args: any, ctx: any, info: any) =>
            await joinMonster(info, ctx,
                (sql: string) => query(sql),
                {dialect: "mysql"}),
        orders: async (root: any, args: any, ctx: any, info: any) =>
            await joinMonster(info, ctx,
                (sql: string) => query(sql),
                {dialect: "mysql"}),
    },
    Mutation: {
        addOrder: async (root: any, {product}: any) => await orderService.create(product),
        updateOrder: async (root: any, {productBasic}: any) => {
            const result = await orderService.updateBasic(productBasic);
            return result[0] !== 0;
        },
        removeOrder: async (root: any, {id}: { id: string }) => {
            const result = await orderService.remove(id);
            return result !== 0;
        },
    }
};

export default resolvers;