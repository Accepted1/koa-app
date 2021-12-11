const KoaBodyParser = require("koa-bodyparser");
const router = require("../router");
const response = require("../utils/response");
const error = require("../utils/error");
const cors = require("@koa/cors");
const mdKoaBodyParser = KoaBodyParser({
  enableTypes: ["json", "form", "text", "xml"],
  formLimit: "56kb",
  jsonLimit: "1mb",
  textLimit: "1mb",
  xmlLimit: "1mb",
  strict: true,
});
const mdRouters = router.routes();
const mdResponse = response();
const mdError = error();
const mdCors = cors({
  origin: "*",
  credentials: true,
  allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
});
module.exports = [mdKoaBodyParser, mdResponse, mdError, mdCors, mdRouters];
