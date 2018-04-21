const router = require("express").Router();
const loginRoutes = require('./login');
const registerRoutes = require('./register');
const logoutRoute = require('./logout')
const clientRoutes = require('./client')
const customerRoutes = require('./customer')

router.use("/login", loginRoutes);
router.use("/register", registerRoutes);
router.use("/logout", logoutRoute);
router.use("/client", clientRoutes);
router.use("/customer", customerRoutes);

module.exports = router;