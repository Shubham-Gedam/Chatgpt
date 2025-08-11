const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
    res.render("home");
});

// Login page
router.get('/login', (req, res) => {
    res.render("login"); // views/login.ejs
});

// Register page
router.get('/register', (req, res) => {
    res.render("register"); // views/register.ejs
});

module.exports = router;
