const router = require("express").Router();
const { loginController, logoutController } = require("../controllers/auth.controller");
const { validate } = require("../middleware/validate");
const { loginSchema } = require("../validators/auth.validators");

router.post("/login", validate(loginSchema), loginController);

router.get("/logout", logoutController);

module.exports = router;
