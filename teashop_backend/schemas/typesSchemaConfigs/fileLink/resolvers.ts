import * as fileService from '../../../services/fileLinkService';
import joinMonster from "join-monster";
import {query} from "../../../db/connection";

const resolvers = {
    Query: {
        file: async (root: any, args: any, ctx: any, info: any) =>
            await joinMonster(info, ctx,
                (sql: string) => query(sql),
                {dialect: "mysql"}),
        filesByProductId: async (root: any, args: any, ctx: any, info: any) =>
            await joinMonster(info, ctx,
                (sql: string) => query(sql),
                {dialect: "mysql"}),
    },
    Mutation: {
        addFile: async (root: any, {file}: any) => await fileService.create(file),
        removeFile: async (root: any, {id}: { id: string }) => {
            const result = await fileService.remove(id);
            return result !== 0;
        },
    }
};

export default resolvers;