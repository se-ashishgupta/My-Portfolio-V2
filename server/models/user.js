import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import crypto from "crypto";

const schema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please Enter Your First Name"],
    },
    lastName: {
      type: String,
      required: [true, "Please Enter Your Last Name"],
    },
    email: {
      type: String,
      required: [true, "Please Enter Your Email"],
      unique: true,
      validate: validator.isEmail,
    },
    mobile: {
      type: Number,
      required: [true, "Please Enter Your Mobile Number"],
    },
    password: {
      type: String,
      required: [true, "Please Enter Your Password"],
      minLength: [6, "Password Must be Atleast 6 Character"],
      select: false,
    },
    titles: [
      {
        type: String,
      },
    ],
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    avatar: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    about: {
      type: String,
    },
    thought: {
      type: String,
    },
    address: {
      type: String,
    },
    socialLinks: {
      linkedin: {
        type: String,
      },
      github: {
        type: String,
      },
      facebook: {
        type: String,
      },
      twitter: {
        type: String,
      },
      instagram: {
        type: String,
      },
      youtube: {
        type: String,
      },
    },

    resetPasswordToken: String,
    resetPasswordExpire: String,
  },
  { timestamps: true }
);

schema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

schema.methods.getJwtToken = function () {
  const user = {
    ...this.toObject(),
  };

  // delete user.password;

  return jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

schema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

schema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

export const User = mongoose.model("User", schema);
