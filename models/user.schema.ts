import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  userName: { type: String, require: true, unique: true },
  email: { type: String, require: true, unique: true },
  phone: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

const User = models.User || model("User", UserSchema);

export default User;
