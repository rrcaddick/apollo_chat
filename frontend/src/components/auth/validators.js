const nameValidator = {
  required: "Please provide your full name",
  pattern: {
    value: /^[a-zA-Z ]*$/,
    message: "Your name should not contain numbers or special characters. (Sorry Elon!)",
  },
};

const emailValidator = {
  required: "Please provide your email address",
  pattern: {
    value:
      // eslint-disable-next-line no-control-regex
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
    message: "The email you entered is not a valid email address",
  },
};

const mobileValidator = {
  required: "Please provide your mobile number",
  pattern: {
    value: /^(?:0\.(?:0[0-9]|[0-9]\d?)|[0-9]\d*(?:\.\d{1,2})?)(?:e[+-]?\d+)?$/,
    message: "Mobile number should only contain digits",
  },
};

const passwordValidator = {
  required: "Please provide a password for your account",
  pattern: {
    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    message:
      "Your password should be least 8 characters, with at least 1 lowercase, capital, number and special character",
  },
};

const confirmPasswordValidator = (getValues) => ({
  required: "Please confirm your password",
  validate: (confirmPassword) => {
    if (confirmPassword !== getValues("password")) return "Your passwords do not match";
  },
});

export { nameValidator, emailValidator, mobileValidator, passwordValidator, confirmPasswordValidator };
