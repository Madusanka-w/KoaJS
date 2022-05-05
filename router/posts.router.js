import Router from "@koa/router";
import {deletePost, get, getAll, save, update} from '../api/posts.api.js';

const postsRouter = new Router({
    prefix: '/posts'
});

postsRouter.post('/',(ctx) => {
    const data = ctx.request.body;
    ctx.body = save(data);
    ctx.set('Content-Type', 'application/json')
    ctx.status = 201;
});

//getAll
postsRouter.get('/',(ctx) => {
    ctx.body = getAll();
    ctx.set('Content-Type', 'application/json')
    ctx.status = 200;
});

//getONe
postsRouter.get('/:id',(ctx) => {
    const id = ctx.params.id;
    ctx.body = get(id);
    ctx.set('Content-Type', 'application/json')
    ctx.status = 200;
});

//update
postsRouter.put('/:id',(ctx) => {
    const id = ctx.params.id;
    ctx.body = update(id, ctx.request.body);
    ctx.set('Content-Type', 'application.json')
    ctx.status = 200;
});

//delete
postsRouter.del('/:id',(ctx) => {
    const id = ctx.params.id;
    deletePost(id);
    ctx.status = 204;
});

export default postsRouter;
