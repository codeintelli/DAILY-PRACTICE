import Joi from "joi";

const registerController = {
  async register(req, res, next) {
    /* CHECKLIST

[ - ]  validate the request
[ - ]  authorize the request
[ - ]  check if user is in the database already
[ - ]  prepare model
[ - ]  Store in database
[ - ]  generate token
[ - ]  send response

*/

    // validation

    const registerSchema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
      repeatpassword: Joi.ref("password"),
    });

    const { error } = registerSchema.validate(req.body);

    if (error) {
      return next(error);
    }

    res.json({ msg: "Hello From user" });
  },
};
export default registerController;
