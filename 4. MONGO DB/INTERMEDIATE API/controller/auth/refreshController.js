import Joi from "joi";
import { REFRESH_SECRET } from "../../config";
import { RefreshToken, User } from "../../model";
import CustomErrorHandler from "../../services/CustomErrorHandler";
import JwtService from "../../services/JwtService";
const refreshController = {
  async refresh(req, res, next) {
    //   validation
    const refreshSchema = Joi.object({
      refresh_token: Joi.string().required(),
    });
    const { error } = refreshSchema.validate(req.body);
    if (error) {
      return next(error);
    }

    // checking in database
    let refreshToken;
    try {
      refreshToken = await RefreshToken.findOne({
        token: req.body.refresh_token,
      });
      if (!refreshToken) {
        return next(CustomErrorHandler.unAuthorized("Invalid Refresh Token"));
      }
      let userId;
      try {
        const { _id } = await JwtService.verify(
          refreshToken.token,
          REFRESH_SECRET
        );
        userId = _id;
      } catch (err) {
        return next(CustomErrorHandler.unAuthorized("Invalid Refresh Token"));
      }

      const user = await User.findOne({ _id: userId });
      if (!user) {
        return next(CustomErrorHandler.unAuthorized("No User Found!"));
      }

      //   tokens

      const access_token = JwtService.sign({ _id: user._id, role: user.role });

      let refresh_token = JwtService.sign(
        {
          _id: user._id,
          role: user.role,
        },
        "1y",
        REFRESH_SECRET
      );

      // database whitelist

      await RefreshToken.create({ token: refresh_token });

      res.json({ message: "login successfully", access_token, refresh_token });
    } catch (err) {
      return next(new Error("Something Went Wrong" + err.message));
    }
  },
};

export default refreshController;
