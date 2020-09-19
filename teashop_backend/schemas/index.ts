import {stitchSchemas} from '@graphql-tools/stitch';
import {getProductTypeSchema} from './productType';
import {getProductSubTypeSchema} from './productSubType';
import {loadSchema} from "@graphql-tools/load";
import {join} from "path";
import {GraphQLFileLoader} from "@graphql-tools/graphql-file-loader";
import {getFileSchema} from "./file";
import {getProductSchema} from "./product";

export default async function () {
    const schema = await loadSchema(join(__dirname, './schema.graphql'),
        {loaders: [new GraphQLFileLoader()]});

    return stitchSchemas({
        schemas: [
            await getProductTypeSchema(),
            await getProductSubTypeSchema(),
            await getFileSchema(),
            await getProductSchema(),
            schema
        ]
    });
}