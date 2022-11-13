import Joi from 'joi';
import CustomErrorHandler from '../../services/CustomErrorHandler';
import { User, RefreshToken } from '../../models';
import { REFRESH_SECRET } from '../../config';
import JwtService from '../../services/JwtService';
import bcrypt from 'bcrypt';

const registerController = {
  async register(req, res, next) {
    const registerSchema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),
      repeat_password: Joi.ref('password'),
      role: Joi.string(),
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
          CustomErrorHandler.alreadyExists('This Email is already in use')
        );
      }
    } catch (err) {
      console.log(
        '🚀 ~ file: registerController.js ~ line 30 ~ register ~ err',
        err
      );
      return next(err);
    }
    // extract data from body
    const { name, email, password } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // prepare the model
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    let access_token;
    let refresh_token;
    try {
      const result = await user.save();
      console.log(result);
      // Token
      access_token = JwtService.sign({ _id: result._id, role: result.role });
      refresh_token = JwtService.sign(
        { _id: result._id, role: result.role },
        '1y',
        REFRESH_SECRET
      );
      // database whitelist
      await RefreshToken.create({ token: refresh_token });
    } catch (err) {
      return next(err);
    }

    res.json({ access_token, refresh_token });
  },
};

export default registerController;
