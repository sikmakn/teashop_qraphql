import dotenv from 'dotenv';
dotenv.config();
import createDb from "./db/createDb";
import Koa from 'koa';
import koaBody from 'koa-bodyparser';
import {ApolloServer} from 'apollo-server-koa';
import getSchemaAsync from './schemas';

async function start() {
    await createDb;
    await import('./db/connection').then(module => module.default.sync());

    const app = new Koa();
    app.use(koaBody());
    const server = new ApolloServer({schema: await getSchemaAsync()});
    server.applyMiddleware({app});

    app.listen(process.env.PORT);
}

start();