const _ = require("underscore");
const jwt = require("jsonwebtoken");

const verify = async (req, res, next) => {
  try {
    const bearerToken = req.headers["authorization"];

    if (_.isEmpty(bearerToken)) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const token = bearerToken.split(" ")[1];
    const decoded = jwt.verify(token, "nmquang462000");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = verify;
