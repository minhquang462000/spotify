// client route
const albumClientRoute = require("./Client/album.route");
const commentClientRoute = require("./Client/comment.route");
const categoryClientRoute = require("./Client/category.route");
const songClientRoute = require("./Client/song.route");
const singerClientRoute = require("./Client/singer.route");
const radioClientRoute = require("./Client/radio.route");

const clientRouter = (app) => {
  albumClientRoute(app);
  commentClientRoute(app);
  categoryClientRoute(app);
  songClientRoute(app);
  singerClientRoute(app);
  radioClientRoute(app);
};
module.exports = clientRouter;
