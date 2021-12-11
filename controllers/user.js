class User {
  getUserName() {
    return (ctx) => {
      ctx.body = "I am Who";
    };
  }
  getRequestBody() {
    return (ctx) => {
      ctx.body = ctx.request.body;
    };
  }
}
module.exports = new User();
