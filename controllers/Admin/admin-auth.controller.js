const adminService = require("../../services/admin.service");

const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isMatch = await adminService.comparePassword({ email, password });
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Email or password is  incorrect" });
    }
    const admin = await adminService.getOneByEmail(email);
    // tao jwt token
    const token = jwt.sign(
      { email: admin.email, id: admin._id.toString() },
      "nmquang462000",
      { expiresIn: "1d" }
    );
    return res.status(200).json({ account: admin, token: token });
  } catch (error) {
    return res.status(500).json({ message: "Sai email hoac password" });
  }
};
const getIdentity = async (req, res) => {
  try {
    const { email, _id } = req.user;
    const admin = await adminService.getOneByEmail(email);
    return res.status(200).json(admin);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "loi server" });
  }
};
module.exports = {
  login,
  getIdentity,
};
