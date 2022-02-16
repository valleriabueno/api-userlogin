const { Router } = require("express");
const userRoutes = require("./userRoutes")
const router = Router();
const User = require("../models/User")
const isLogged = require("../middlewares/is-logged")


//Essa rota precisa ser protegida, por isso a importância do middleware
router.get("/", isLogged, async (req, res) => {
    const { user } = req.session;
    const data = await User.findById(user._id).lean();

    //passar o { user } porque a navbar faz essa verificação e o data para a home
    res.render("home", { user, data });
});

router.use(userRoutes);
router.use((req, res, next) => {
    res.status(404).render("404");
});

module.exports = router;