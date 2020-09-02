import dotenv from 'dotenv';
dotenv.config();
import createDb from "./db/createDb";
import Koa from 'koa';

async function start() {
    await createDb;
    await import('./db/connection').then(module => module.default.sync());

    const app = new Koa();
    app.use(ctx => {
        ctx.body = 'Hello Koa';
    });
    app.listen(process.env.PORT);
}

start();