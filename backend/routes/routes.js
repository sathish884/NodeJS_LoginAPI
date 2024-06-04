const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/userRegister", async (req, res) => {
    const { name, email, password } = req.body
    try {
        const existUser = await User.findOne({ email })
        if (existUser) {
            return res.status(401).json({ message: "User already exists" })
        };
        const hashPassword = new bcrypt.hash(password, 10);
        const newUser = await User({ name, email, password: hashPassword })
        await newUser.save();
        res.status(200).json({ message: "User successfully register", data: newUser });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", data: error })
    }
})

module.exports = router;