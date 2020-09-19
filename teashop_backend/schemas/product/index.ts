import {addResolversToSchema} from '@graphql-tools/schema';
import {loadSchema} from '@graphql-tools/load';
import {GraphQLFileLoader} from '@graphql-tools/graphql-file-loader';
import {join} from "path";
import {resolvers} from "./resolvers";

import joinMonsterAdapt from 'join-monster-graphql-tools-adapter';
import joinMonsterQuery from "./joinMonsterQuery";
import joinMonsterModels from "../../db/joinMosterModels";

export const getProductSchema = async () => {
    const schema = await loadSchema(join(__dirname, './schema.graphql'),
        {loaders: [new GraphQLFileLoader()]});
    const finishedSchema = addResolversToSchema({
        schema,
        resolvers,
    });

    joinMonsterAdapt(finishedSchema, {
        ...joinMonsterQuery,
        ...joinMonsterModels
    });

    return finishedSchema;
};