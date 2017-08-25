const Koa = require('koa');
const Router = require('koa-router');
const server = require('koa-static');
const views = require('koa-views');
const routes = require('./router.js');
const child_process = require('child_process');

const app = new Koa();
const router = new Router();

app.use(views('./src/views'));
app.use(server('static'));

routes(router);
app.use(router.routes());

app.listen(3001, () => {
    let cmd = '';
    switch (process.platform) {
        case 'linux':
            cmd = 'xdg-open';
            break;
        case 'wind32':
            cmd = 'start';
            break;
        case 'darwin':
            cmd = 'open';
            break;
        default:
            cmd = 'xdg-open';
    }
    child_process.exec( cmd + ' ' + 'http://127.0.0.1:3001');
    console.log('server listen on  http://127.0.0.1:3001');
});
