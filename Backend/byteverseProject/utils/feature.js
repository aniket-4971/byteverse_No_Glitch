const jwt =require("jsonwebtoken");
const keysecret=process.env.JWT_SECRET;
///esmai galti hai users wala scene mai

 const sendCookieuser = (user, res, message, statusCode = 200) => {
  const token = jwt.sign({ _id :user._id }, process.env.JWT_SECRET);
  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
      success: true,
      message,
      statusCode
    });
    return token;
};
const sendCookiepolice = (police, res, message, statusCode = 200) => {
  const tokenp = jwt.sign({ _id :police._id },process.env.JWT_SECRET);
  res
    .status(statusCode)
    .cookie("tokenpolice", tokenp, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
      success: true,
      message,
      statusCode
    });
    return tokenp;
};


const sendCookieadmin = (admin, res, message, statusCode = 200) => {
  const tokena = jwt.sign({ _id :admin._id },process.env.JWT_SECRET);
  res
    .status(statusCode)
    .cookie("tokenadmin", tokena, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
      success: true,
      message,
      statusCode
    });
    return tokena;
};
module.exports={sendCookieuser,sendCookiepolice,sendCookieadmin};