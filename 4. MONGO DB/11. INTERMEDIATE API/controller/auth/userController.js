import { User } from "../../model";
import CustomErrorHandler from "../../services/CustomErrorHandler";

const userController = {
  async me(req, res, next) {
    try {
      //   const user = await User.findOne({ _id: req.user._id }).select(
      //     "-password -createdAt -__v -updatedAt"
      //   );
      const user = await User.findOne({ _id: req.user._id }).select({
        password: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0,
      });
      if (!user) {
        next(CustomErrorHandler.notFound());
      }
      res.json({ message: user });
    } catch (err) {
      return next(err);
    }
  },
};

export default userController;
