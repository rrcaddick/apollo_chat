const router = require("express").Router();
const { loginController, logoutController, refreshTokenController } = require("../controllers/auth.controller");
const { validate } = require("../middleware/validate");
const { validateRefreshToken } = require("../middleware/authenticate");
const { loginSchema } = require("../validators/auth.validators");

router.post("/login", validate(loginSchema), loginController);

router.get("/refreshToken", validateRefreshToken, refreshTokenController);

router.get("/logout", logoutController);

module.exports = router;
