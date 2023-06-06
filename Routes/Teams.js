const express = require("express");
const router = express.Router();
const teamDa = require('../Model/addTeam');


router.get('/', async (req, res) => {
    //res.send('Get Req');
    try {
        const tournas = await teamDa.find();
        res.json(tournas);
    } catch (err) {
        res.send('Error:' + err);
    }
});

router.get('/:_id', async (req, res) => {
    try {
        const teamId = await teamDa.findById(req.params._id);
        res.json(teamId);
    }
    catch (err) {
        res.send('Error:' + err);
    }
});

router.post('/addTeams', async (req, res) => {
    const teamForm = new teamDa({
        TeamName:req.body.TeamName,
        CoachName:req.body.CoachName,
        Email: req.body.Email,


        Pname1:req.body.Pname1,
        Page1:req.body.Page1,
        Ptype1: req.body.Ptype1,

        Pname2:req.body.Pname2,
        Page2:req.body.Page2,
        Ptype2: req.body.Ptype2,

        Pname3:req.body.Pname3,
        Page3:req.body.Page3,
        Ptype3: req.body.Ptype3,

        Pname4:req.body.Pname4,
        Page4:req.body.Page4,
        Ptype4: req.body.Ptype4,

        Pname5:req.body.Pname5,
        Page5:req.body.Page5,
        Ptype5: req.body.Ptype5,

        Pname6:req.body.Pname6,
        Page6:req.body.Page6,
        Ptype6: req.body.Ptype6,

        Pname7:req.body.Pname7,
        Page7:req.body.Page7,
        Ptype7: req.body.Ptype7,

        Pname8:req.body.Pname8,
        Page8:req.body.Page8,
        Ptype8: req.body.Ptype8,

        Pname9:req.body.Pname9,
        Page9:req.body.Page9,
        Ptype9: req.body.Ptype9,

        Pname10:req.body.Pname10,
        Page10:req.body.Page10,
        Ptype10: req.body.Ptype10,

        Pname11:req.body.Pname11,
        Page11:req.body.Page11,
        Ptype11: req.body.Ptype11,


        Phone: req.body.Phone,
        State: req.body.State,
        City: req.body.City,
    });
    try {
        teamForm.save(teamForm)
            .then(addteam => {
                res.send(addteam);
            })
    }
    catch (err) {
        res.send('Error:' + err);
    }
});

router.delete('/:_id', (req, res) => {
    teamDa.findByIdAndRemove(req.params._id)
        .then(res => {
            res.json({ msg: 'User Deleted' })
        })
        .catch(err => {
            res.json(err)
        })
});

// router.put('/', (req, res) => {
//     teamDa.findOneAndUpdate(
//         { Email: req.body.Email },
//         { $set: req.body }
//     ).then(datas => {
//         if (datas) {
//             res.status(200).json(datas)
//         }
//         else {
//             res.status(401).json({ error: 'User not exists' })
//         }
//     }).catch(err => {
//         res.status(500).json({ error: err.message })
//     })
// });

router.put('/', (req, res) => {
    teamDa.findOneAndUpdate(
        { _id: req.body._id },
        { $set: req.body }
    ).then(datas => {
        if (datas) {
            res.status(200).json(datas)
        }
        else {
            res.status(401).json({ error: 'Cargo not exists' })
        }
    }).catch(err => {
        res.status(500).json({ error: err.message })
    })
});

module.exports = router;
