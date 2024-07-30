const tokenVerify = require("../../middlewares/token-verify.middleware");
const Controller = require("../../controllers/client/radio-client");

const endpoint = "/api/client/radios";
const radioClientRoute = (app) => {
  app.get(endpoint, tokenVerify, Controller.getList);
  app.get(`${endpoint}/:id`, tokenVerify, Controller.getOne);
};
module.exports = radioClientRoute;
