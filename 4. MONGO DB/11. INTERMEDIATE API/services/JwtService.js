// single responsbility principle
import { JWT_SECRET } from "../config";
import jwt from "jsonwebtoken";
class JwtService {
  // creating token means sign the tokens
  //   payload measn what we want to store in token,when the token will be expiry
  static sign(payload, expiry = "3600s", secret = JWT_SECRET) {
    return jwt.sign(payload, secret, { expiresIn: expiry });
  }
  //   after creating verify
  static verify(token, secret = JWT_SECRET) {
    return jwt.verify(token, secret);
  }
}

export default JwtService;
