const yup = require("yup");
const User = require("../../../models/user");

const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const userSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Min name length of 2 characters")
    .max(255, "Max name length of 255 characters")
    .required("A name is required to register"),

  email: yup
    .string()
    .email("Please enter a valid email address")
    .test("unique-email", "Email already exists", async function (email) {
      const user = await User.findOne({ email });
      if (user) return false;
      return true;
    }),

  password: yup
    .string()
    .matches(strongPasswordPattern, {
      message:
        "Password should be least 8 characters, with at least 1 lowercase, capital, number and special character",
    })
    .required("Password is required to create an account"),

  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password")], "Passwords do not match"),

  status: yup.string().min(3).max(255),
});

module.exports = {
  userSchema,
};
