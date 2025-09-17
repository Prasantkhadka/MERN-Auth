//this function will find the token from the cookie and that will find the userId

import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.json({
      success: false,
      message: "Not Authorized Login Again",
    });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode.id) {
      req.user = { id: tokenDecode.id };
    } else {
      res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }

    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export default userAuth;
