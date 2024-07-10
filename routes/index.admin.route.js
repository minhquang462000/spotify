// private route
const userRoute = require("./Admin/user.route");
const singerRoute = require("./Admin/singer.route");
const songRoute = require("./Admin/song.route");
const commentRoute = require("./Admin/comment.route");
const categoryRoute = require("./Admin/category.route");
const albumRoute = require("./Admin/album.route");
const privateRoute = (app) => {
  // private route
  userRoute(app);
  singerRoute(app);
  songRoute(app);
  commentRoute(app);
  categoryRoute(app);
  albumRoute(app);
  // admin
  app.use("/admin-auth", require("./Admin/admin-auth"));
  // upload
  app.use("/upload", require("./Admin/upload.route"));
};

module.exports = privateRoute;
