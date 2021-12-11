const Koa = require("koa");
const compose = require("koa-compose");
const middlewares = require("./middlewares");
const app = new Koa();
const port = "5000";

app.use(compose(middlewares));

app.listen(port, () => {
  console.log("server start");
});

app.on("error", (err, ctx) => {
  if (ctx) {
    ctx.body = {
      code: 9999,
      message: `程序运行时报错：${err.message}`,
    };
  }
});
