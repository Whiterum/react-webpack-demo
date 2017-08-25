module.exports = function(router) {
    router.get('/*', async ctx => {
        await ctx.render('index.html');
    });
};
