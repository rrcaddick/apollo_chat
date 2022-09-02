const router = require("express").Router();
const { loginController } = require("../controllers/auth.controller");
const { validate } = require("../middleware/validate");
const { loginSchema } = require("../validators/auth.validators");

router.post("/login", validate(loginSchema), loginController);

module.exports = router;
