const router = require("express").Router();

const adminAuthController = require("../../controllers/Admin/admin-auth.controller");
const tokenVerify = require("../../middlewares/token-verify.middleware");

router.post("/login", adminAuthController.login);
router.get("/identity", tokenVerify, adminAuthController.getIdentity);

module.exports = router;
