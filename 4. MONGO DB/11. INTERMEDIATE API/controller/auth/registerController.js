import Joi from "joi";
import CustomErrorHandler from "../../services/CustomErrorHandler";
import { RefreshToken, User } from "../../model";
import bcrypt from "bcrypt";
import JwtService from "../../services/JwtService";
import { REFRESH_SECRET } from "../../config";
   
const registerController = {
  async register(req, res, next) {
    //   register logic
    // [] validate the request
    // [] authorize the request
    // [] check if user is in the database already
    // [] prepare model
    // [] store in database
    // [] generate jwt token
    // [] send response

    // validation
    const registerSchema = Joi.object({
      name: Joi.string().min(3).max(30).required().messages({
        "string.base": `name should be a type of 'text'`,
        "string.empty": `name cannot be an empty field`,
        "string.min": `name should have a minimum length of {3}`,
        "any.required": `name is a required field`,
      }),
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
      repeatPassword: Joi.ref("password"),
      role: Joi.string(),
    });

    console.log(req.body);
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return next(error);

      //   we can throw error from here but this can take only async function error but if we want to throw async error also then we can use upper statement
    }

    // check if user in database already
    try {
      const exist = await User.exists({ email: req.body.email });
      if (exist) {
        //   here we can introduce custom error  if user want to buy any thing but they dont have enough balence in their account so we can send custom error like insufficient balance
        return next(
          CustomErrorHandler.alreadyExist("This email is already taken")
        );
      }
    } catch (err) {
      return next(err);
    }

    // hash password
    const { name, email, password } = req.body;
    const hashedpassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedpassword,
    });

    let access_token, refresh_token;
    try {
      const result = await user.save();
      console.log(result);
      // token
      access_token = JwtService.sign({
        _id: result._id,
        role: result.role,
      });
      refresh_token = JwtService.sign(
        {
          _id: result._id,
          role: result.role,
        },
        "1y",
        REFRESH_SECRET
      );

      // database whitelist

      await RefreshToken.create({ token: refresh_token });
    } catch (err) {
      return next(err);
    }

    res.json({ email, access_token, refresh_token });
  },
};

export default registerController;
