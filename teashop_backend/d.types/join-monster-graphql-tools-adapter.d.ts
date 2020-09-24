import {GraphQLSchema} from "graphql";

declare module 'join-monster-graphql-tools-adapter'{
    function joinMonsterAdapt(scheme:GraphQLSchema, modelOptions:any):void;
    export = joinMonsterAdapt
}
export default 'join-monster-graphql-tools-adapter';