import jwt from "jsonwebtoken";

const createAccessToken = (payload) => {
  const secret = process.env.ACCESS_TOKEN_SECRET;
  return jwt.sign(payload, secret);
};

export default createAccessToken;
