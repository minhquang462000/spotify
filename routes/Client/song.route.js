const tokenVerify = require("../../middlewares/token-verify.middleware");
const Controller = require("../../controllers/client/song-client");

const endpoint = "/api/client/songs";
const songClientRoute = (app) => {
  app.get(endpoint, tokenVerify, Controller.getList);
  app.get(`${endpoint}/:id`, tokenVerify, Controller.getOne);
};
module.exports = songClientRoute;
