const yup = require("yup");
const User = require("../../../models/user");

const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const mobileNumberPattern = /^(?:0\.(?:0[0-9]|[0-9]\d?)|[0-9]\d*(?:\.\d{1,2})?)(?:e[+-]?\d+)?$/;

const onExistValidate = (value, validator) => {
  if (value === undefined || value === null) {
    return yup.string().notRequired();
  }
  return validator;
};

const emailValidator = yup
  .string()
  .email("Please enter a valid email address")
  .test("unique-email", "Email already exists", async function (email) {
    const user = await User.findOne({ email });
    if (user) return false;
    return true;
  });

const nameValidator = yup
  .string()
  .min(2, "Min name length of 2 characters")
  .max(255, "Max name length of 255 characters")
  .required("A name is required to register");

const mobileValidator = yup
  .string()
  .matches(mobileNumberPattern, { message: "Mobile number should only contain digits" })
  .required("Please provide your mobile number");

const passwordValidator = yup
  .string()
  .matches(strongPasswordPattern, {
    message: "Password should be least 8 characters, with at least 1 lowercase, capital, number and special character",
  })
  .required("Password is required to create an account");

const newPasswordValidator = yup
  .string()
  .matches(strongPasswordPattern, {
    message: "Password should be least 8 characters, with at least 1 lowercase, capital, number and special character",
  })
  .required("Password is required to create an account")
  .when(["currentPassword", "$user"], function (currentPassword, user, schema) {
    const isValid = currentPassword && user.validatePassword(currentPassword);
    if (!isValid) {
      return yup.string().test({
        test: () => {
          const invalidPasswordError = new yup.ValidationError();
          invalidPasswordError.path = "currentPassword";
          invalidPasswordError.message = "Current password not correct";
          return invalidPasswordError;
        },
      });
    }
  });

const confirmPasswordValidator = yup
  .string()
  .required("Please confirm your password")
  .oneOf([yup.ref("password")], "Passwords do not match");

const registerUserSchema = yup.object().shape({
  name: nameValidator,
  email: emailValidator,
  mobile: mobileValidator,
  password: passwordValidator,
  confirmPassword: confirmPasswordValidator,
});

const updateUserSchema = yup.object({
  name: yup.lazy((name) => {
    return onExistValidate(name, nameValidator);
  }),
  email: yup.lazy((email) => {
    return onExistValidate(email, emailValidator);
  }),
  password: yup.lazy((password) => {
    return onExistValidate(password, newPasswordValidator);
  }),
  confirmPassword: yup.string().when(["password"], function (password) {
    if (password) {
      return confirmPasswordValidator;
    }
    return yup.lazy((confirmPassword) => {
      return onExistValidate(confirmPassword, confirmPasswordValidator);
    });
  }),
});

const updateProfileSchema = yup.object().shape({
  status: yup.lazy((status) => {
    const statusValidator = yup.string().min(3).max(255).required("Status cannot be blank");
    return onExistValidate(status, statusValidator);
  }),
  mobile: yup.lazy((mobile) => {
    return onExistValidate(mobile, mobileValidator);
  }),
  profilePicture: yup.lazy((profilePicture) => {
    const profilePictureValidator = yup.string().required("Something went wrong. Please try upload picture again");
    return onExistValidate(profilePicture, profilePictureValidator);
  }),
});

module.exports = {
  registerUserSchema,
  updateUserSchema,
  updateProfileSchema,
};
