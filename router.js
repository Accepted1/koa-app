const Router = require("koa-router");

const Controllers = require("./controllers");

const router = new Router();

router.get("/", Controllers.User.getUserName());

router.post("/post", Controllers.User.getRequestBody());

module.exports = router;
