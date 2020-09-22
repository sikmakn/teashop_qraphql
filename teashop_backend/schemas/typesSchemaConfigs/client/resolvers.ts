import * as clientService from '../../../services/clientService';
import joinMonster from "join-monster";
import {query} from "../../../db/connection";

const resolvers = {
    Query: {
        client: async (root: any, args: any, ctx: any, info: any) =>
            await joinMonster(info, ctx,
                (sql: string) => query(sql),
                {dialect: "mysql"}),
        clients: async (root: any, args: any, ctx: any, info: any) =>
            await joinMonster(info, ctx,
                (sql: string) => query(sql),
                {dialect: "mysql"}),
    },
    Mutation: {
        addClient: async (root: any, {client}: any) => await clientService.create(client),
        updateClient: async (root: any, {client}: any) => {
            const result = await clientService.updateBasic(client);
            return result[0] !== 0;
        },
        removeClient: async (root: any, {id}: { id: string }) => {
            const result = await clientService.remove(id);
            return result !== 0;
        },
    }
};

export default resolvers;