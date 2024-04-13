const appError = require("../utils/apperror");
const users = require("../model/asuser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keysecret = process.env.JWT_SECRET;
const { sendCookieuser } = require("../utils/feature");
//  const sendCookie=require("../utils/feature");
const getall = async (req, res) => {
  try {
    const showall = await users.find({ _id: req.userId });
    res.status(200).json(showall);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};
const registeruser = async (req, res) => {
  const {
    name,
    AadharNo,
    country,
    Address,
    city,
    pincode,
    phonenumber,
    password,
  } = req.body;

  try {
    const user = await users.findOne({ AadharNo: AadharNo });
    if (user) {
      res.status(422).json({ error: "This aadhar is Already Exist" });
    } else {
      const finaluser = await users({
        name: name,
        AadharNo: AadharNo,
        country: country,
        Address: Address,
        city: city,
        pincode: pincode,
        phonenumber: phonenumber,
        password: password,
      });
      //here password hashed
      const storeData = await finaluser.save();
      console.log(storeData);
      res.status(201).json({ status: 201, storeData });
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
  }
};

const login = async (req, res, next) => {
  const { AadharNo, password } = req.body;
  console.log(req.body);
  if (!AadharNo || !password) {
    res.status(422).json({ error: "fill all the details" });
  }
  try {
    const user = await users.findOne({ AadharNo: AadharNo });
    console.log(user);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      console.log(isMatch);
      if (!isMatch) {
        res.status(422).json({ error: "invalid details" });
      } else {
        const token = sendCookieuser(user, res, "success", 201);

        console.log(token);
      }
    }
  } catch (error) {
    res.status(401).json(error);
    console.log("catch block");
  }
};

const unique = async (req, res) => {
  res.status(200).json({
    success: true,
    user: req.mainuser,
  });
};

const deleteid = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteuser = await users.findByIdAndDelete({ id: id });
    res.status(200).json(deletepolice);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateid = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    AadharNo,
    country,
    Address,
    city,
    pincode,
    phonenumber,
    password,
  } = req.body;
  try {
    const updateuser = await users.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateuser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};


module.exports = { getall, registeruser, login, unique, deleteid, updateid };
