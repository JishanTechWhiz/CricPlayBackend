const express = require("express");
const router = express.Router();
const organizerDa = require('../Model/organizer');


router.get('/', async (req, res) => {
    try {
        const datas = await organizerDa.find();
        res.json(datas);
    } catch (err) {
        res.send('Error:' + err);
    }
});

router.get('/:_id', async (req, res) => {
    try {
        const dataid = await organizerDa.findById(req.params._id);
        res.json(dataid);
    }
    catch (err) {
        res.send('Error:' + err);
    }
});

router.post('/login', (req, res) => {
    organizerDa.findOne({ Email: req.body.Email, Password: req.body.Password }).then(datas => {
        if (datas) {
            res.status(200).json(datas)
        }
        else {
            res.status(401).json({ error: 'Incorrect email or password' })
        }
    }).catch(err => {
        res.status(500).json({ error: err.message })
    })
});

router.post('/addorganizer', async (req, res) => {
    if (await userExists(req.body.Email)) {
        res.status(409).json({ error: 'Email alreaday exists' })
    }
    else {
        const dataForm = new organizerDa({
            Fullname: req.body.Fullname,
            Email: req.body.Email,
            Phone: req.body.Phone,
            Password: req.body.Password,
            ConfirmPassword: req.body.ConfirmPassword
        });
        try {
            if (req.body.Password == req.body.ConfirmPassword) {
                dataForm.save(dataForm)
                    .then(data => {
                        res.send(data);
                    })
            }
            else {
                res.status(401).json({ error: 'Password must be same' })
            }

        }
        catch (err) {
            res.send('Error:' + err);
        }
    }
});

router.put('/', (req, res) => {
    organizerDa.findOneAndUpdate(
        { Email: req.body.Email },
        { $set: req.body }
    ).then(datas => {
        if (datas) {
            res.status(200).json(datas)
        }
        else {
            res.status(401).json({ error: 'User not exists' })
        }
    }).catch(err => {
        res.status(500).json({ error: err.message })
    })
});

router.delete('/:_id', (req, res) => {
    organizerDa.findByIdAndRemove(req.params._id)
        .then(res => {
            res.json({ msg: 'User Deleted' })
        })
        .catch(err => {
            res.json(err)
        })
});

const userExists = async (Email) => {
    const datas = await organizerDa.findOne({ Email: Email })

    if (datas) {
        return true
    }
    else {
        return false
    }
}

module.exports = router;