const  { Router } = require("express");
const UserController = require("../controllers/UserController")
const router = Router();

router.get("/login", UserController.paginaLogin);
router.get("/signup", UserController.paginaSignup);

router.post("/login", UserController.loginUser);
router.post("/signup", UserController.signupUser);

router.get("/logout", UserController.logoutUser);

module.exports = router;