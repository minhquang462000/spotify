const tokenVerify = require("../../middlewares/token-verify.middleware");
const Controller = require("../../controllers/client/singer-client");

const endpoint = "/api/client/singers";
const singerClientRoute = (app) => {
  app.get(endpoint, tokenVerify, Controller.getList);
  app.get(`${endpoint}/:id`, tokenVerify, Controller.getOne);
};
module.exports = singerClientRoute;
