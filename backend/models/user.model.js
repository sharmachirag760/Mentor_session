const bcrypt = require('bcrypt');
const { required } = require('joi');
const { Schema } = require('mongoose');


const userSchema = new Schema(
    {
    //   photoUrl: {
    //     type: Schema.Types.String,
    //     default: "",
    //   },
      name: {
        type: Schema.Types.String,
        required: true,
        trim: true,
      },
      username: {
        type: Schema.Types.String,
        required: true,
        trim: true,
        unique: true,
      },
      email: {
        type: Schema.Types.String,
        unique: true,
        required: true,
        trim: true,
      },
      password: {
        type: Schema.Types.String,
        required: true,
        select: false,
      },
      role: {
        type: Schema.Types.String,
        enum: ["mentor", "student"],
        default: null, // Initially null, can be set later
      },
    //   verified: {
    //     type: Schema.Types.Boolean,
    //     default: false,
    //   },
    //   profile: {
    //     tags: {
    //       type: [Schema.Types.String],
    //       default: [],
    //     },
    //     title: {
    //       type: Schema.Types.String,
    //       default: "",
    //     },
    //     bio: {
    //       type: Schema.Types.String,
    //       default: "",
    //     },
    //     college: {
    //       type: Schema.Types.String,
    //       default: "",
    //     },
    //     social: {
    //       linkedin: {
    //         type: Schema.Types.String,
    //         default: "",
    //       },
    //       github: {
    //         type: Schema.Types.String,
    //         default: "",
    //       },
    //       twitter: {
    //         type: Schema.Types.String,
    //         default: "",
    //       },
    //       facebook: {
    //         type: Schema.Types.String,
    //         default: "",
    //       },
    //       instagram: {
    //         type: Schema.Types.String,
    //         default: "",
    //       },
    //     },
    //   },
    },
    { timestamps: true }
  );

  userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 8);
    }
    next();
  });

  userSchema.index({ email: 1 });

const UserModel = model("User", userSchema);
module.exports = UserModel;