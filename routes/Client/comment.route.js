const tokenVerify = require("../../middlewares/token-verify.middleware");
const Controller = require("../../controllers/client/comment-client");

const endpoint = "/api/client/comments";
const commentClientRoute = (app) => {
  app.get(endpoint, tokenVerify, Controller.getList);
  app.get(`${endpoint}/:id`, tokenVerify, Controller.getOne);
};
module.exports = commentClientRoute;
