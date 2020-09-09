import {mergeSchemasAsync} from '@graphql-tools/merge';
import {productSchema} from './productType';

export default async function () {
    return await mergeSchemasAsync({
        schemas: [await productSchema]
    });
}