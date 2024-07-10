const Admin = require("../models/admin.model");
const bcrypt = require("bcrypt");

const checkDefault = async () => {
  const existDoc = await Admin.findOne({ email: "nmquang@admin.com" }).exec();
  if (existDoc) {
    return;
  }
  await create({
    email: "nmquang@admin.com",
    password: "123456",
    name: "Nm Quang",
    avatarUrl: "https://i.pravatar.cc/150?img=1",
  });
};

const create = async ({ email, password, name, avatarUrl }) => {
  const admin = new Admin({ email, password, name, avatarUrl });
  return await admin.save();
};

const getOneByEmail = async (email) => {
  return await Admin.findOne({ email }, { password: 0 }).exec();
};
const comparePassword = async ({ email, password }) => {
  const admin = await Admin.findOne({ email }).exec();

  if (!admin) {
    return false;
  }
  return await bcrypt.compare(password, admin.password);
};

module.exports = {
  checkDefault,
  create,
  getOneByEmail,
  comparePassword,
};
