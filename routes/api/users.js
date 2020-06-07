const express = require('express')
const router = express.Router()

// User Model
const User = require('../../models/User')

// @route   POST api/users
// @desc    Register new user
// @access  Public
router.post('/', (req, res) => {
    const { name, email, password } = req.body

    if(!name || !email || !password) {
        return req.status(400).json({ msg: 'Please enter all fields' })
    }

    User.findOne({ email })
        .then(user => {
            if(user) return res.status(400).json({ msg: 'User already exists' })
            
        })
    res.send('register')
})


module.exports = router