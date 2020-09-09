import {addResolversToSchema} from '@graphql-tools/schema';
import {loadSchemaSync} from '@graphql-tools/load';
import {GraphQLFileLoader} from '@graphql-tools/graphql-file-loader';
import {join} from "path";
import {resolvers} from "./resolvers";

const schema = loadSchemaSync(join(__dirname, './schema.graphql'),
    {loaders: [new GraphQLFileLoader()]});

export const productSchema = addResolversToSchema({
    schema,
    resolvers
});