import { Schema as _Schema, model } from 'mongoose';

const Schema = _Schema;

const UserSchema = new Schema(
  {
    name: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
    },
    password: {
      type: 'string',
      required: true,
    },
    role: {
      type: 'string',
      default: 'customer',
    },
  },
  { timestamps: true }
);
const User = model('User', UserSchema, 'Users');
export default User;
