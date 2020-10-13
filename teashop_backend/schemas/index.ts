import {stitchSchemas} from '@graphql-tools/stitch';
import {loadSchema} from "@graphql-tools/load";
import {join} from "path";
import {GraphQLFileLoader} from "@graphql-tools/graphql-file-loader";
import {addResolversToSchema} from "@graphql-tools/schema";
import joinMonsterAdapt from "join-monster-graphql-tools-adapter";
import joinMonsterModels from "../db/joinMosterModels";
import getSubDirectories from "../helpers/getSubDirectories";
import {SchemaLikeObject} from "@graphql-tools/stitch/types";
import {GraphQLSchema} from "graphql";

export default async function () {
    const schema = await loadSchema(join(__dirname, './schema.graphql'),
        {loaders: [new GraphQLFileLoader()]});
    const schemas = [...await getAllConfiguredSchemas(__dirname), schema];
    return stitchSchemas({schemas});
}

async function getAllConfiguredSchemas(directionPath: string): Promise<SchemaLikeObject[]> {
    const schemaConfigsDir = join(directionPath, './typesSchemaConfigs');
    const subDirs = await getSubDirectories(schemaConfigsDir);
    const schemasPromises = subDirs.map((dirName: string) =>
        getConfiguredSchema(join(schemaConfigsDir, dirName)));
    return await Promise.all(schemasPromises);
}

async function getConfiguredSchema(dirname: string) {
    const finishedSchema = await createConfiguredScheme();
    await configureJoinMonster(finishedSchema);
    return finishedSchema;

    async function createConfiguredScheme() {
        return addResolversToSchema({
            schema: await loadSchema(joinToDirname('./schema.graphql'),
                {loaders: [new GraphQLFileLoader()]}),
            resolvers: await importDefaultByDirname('./resolvers'),
        });
    }

    async function configureJoinMonster(schema: GraphQLSchema) {
        const joinMonsterQuery = await importDefaultByDirname('./joinMonsterQuery');
        joinMonsterAdapt(schema, {
            ...joinMonsterQuery,
            ...joinMonsterModels
        });
    }

    async function importDefaultByDirname(path: string) {
        return (await import(joinToDirname(path))).default;
    }

    function joinToDirname(path: string) {
        return join(dirname, path);
    }
}