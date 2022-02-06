import Joi from "joi";
import CustomErrorHandler from "../../services/CustomErrorHandler";

const registerController = {
  async register(req, res, next) {
    // Todo checklist
    //[+] validate the request
    // authorize the request
    // check if user already registered
    // prepare model
    // store in database
    // generate jwt token and
    // send a response
    console.log(req.body);
    // 1. validating a user
    const registerSchema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
      repeat_password: Joi.ref("password"),
    });
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return next(error);
    }
    //  check user in database
    try {
      const exists = await User.exists({ email: req.body.email });
      if (exists) {
        return next(
          CustomErrorHandler.alreadyExists("This Email is already in use")
        );
      }
    } catch (err) {
      return next(err);
    }
    res.json({ msg: "Hello from Express" });
  },
};

export default registerController;
