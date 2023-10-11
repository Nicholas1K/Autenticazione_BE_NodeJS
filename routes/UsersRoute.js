const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const bcrypt = require('bcrypt');

router.get('/register', async (req, res) => {
    try {
        const users = await User.find().limit(10);
        res.json(users);
    } catch (error) {
        res.json({message:error});
    }
});

router.get('/register/:userId', async (req, res) => {
    try {
        const users = await User.findById(req.params.userId);
        res.json(users);
    } catch (error) {
        res.json({ message: error });
    }
});


router.post('/register', async (req, res) => {

    const { nome, cognome, email, password } = req.body;

    try {

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password,salt);
     
    const user = new User({
        nome,
        cognome,
        email,
        password: hashedPassword,
    });

    const newUser = await user.save();
    res.json(newUser);

    }catch(error){
        res.json({message:error});
    }
});

router.patch('/put/:userId', async (req, res) => {
    try {
        const patchedUser = await User.updateOne({_id:req.params.userId},{
            $set:{
                nome:req.body.nome,
                cognome: req.body.cognome,
                email: req.body.email,
                password: req.body.password,
            },
        });

        res.json(patchedUser);

    } catch (error) {
        res.json({ message: error });
    }
});

router.delete('/delete/:userId', async (req, res) => {
    try {
        const removedUser = await User.deleteOne({_id:req.params.userId});
        res.json(removedUser);
    } catch (error) {
        res.json({message:error});
    }
})

module.exports = router;