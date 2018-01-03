module.exports = (options, app) => {
    return async function (ctx,next) {
        //访问日志
        let data = {
            uid: ctx.uid || '',
            uri: ps,
            method: ctx.method,
            query: JSON.stringify(ctx.query) || '',
            params: JSON.stringify(ctx.params) || '',
            body: JSON.stringify(ctx.request.body) || '',
            agent: ctx.get('User-Agent'),
            ip: ctx.ip,
        }
        await ctx.model.MemberLog.create(data);
        await next();
    }
}
