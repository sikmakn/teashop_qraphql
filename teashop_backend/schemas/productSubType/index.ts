import {addResolversToSchema} from '@graphql-tools/schema';
import {loadSchema} from '@graphql-tools/load';
import {GraphQLFileLoader} from '@graphql-tools/graphql-file-loader';
import {join} from "path";
import {resolvers} from "./resolvers";

export const getProductSubTypeSchema = async () => {
    const schema = await loadSchema(join(__dirname, './schema.graphql'),
        {loaders: [new GraphQLFileLoader()]});
    return addResolversToSchema({
        schema,
        resolvers
    });
};