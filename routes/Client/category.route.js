const tokenVerify = require("../../middlewares/token-verify.middleware");
const controller = require("../../controllers/client/category-client");

const endpoint = "/api/client/categories";
const categoryClientRoute = (app) => {
  app.get(endpoint, tokenVerify, controller.getList);
  app.get(`${endpoint}/:id`, tokenVerify, controller.getOne);
};
module.exports = categoryClientRoute;
