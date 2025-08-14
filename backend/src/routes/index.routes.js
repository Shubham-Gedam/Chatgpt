const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

// Home page
router.get('/', authMiddleware.authUser, (req, res) => {
    res.render("home");
});

// // Login page
// router.get('/login', (req, res) => {
//     res.render("login"); // views/login.ejs
// });

// // Register page
// router.get('/register', (req, res) => {
//     res.render("register"); // views/register.ejs
// });



module.exports = router;
