module.exports = app => {
  class IndexController extends app.Controller {
    async index() {
      const { ctx } = this;
      ctx.status = 200;
      ctx.body = `# 欢迎投简历:dingnan@8jieke.com\n\nBy:xql ©xueAnd`;
    }
  }
  return IndexController;
};
