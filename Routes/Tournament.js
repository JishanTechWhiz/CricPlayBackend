const express = require("express");
const router = express.Router();
const tournamentDa = require('../Model/addTournament');


router.get('/', async (req, res) => {
    //res.send('Get Req');
    try {
        const tournas = await tournamentDa.find();
        res.json(tournas);
    } catch (err) {
        res.send('Error:' + err);
    }
});

router.get('/:_id', async (req, res) => {
    try {
        const tournaId = await tournamentDa.findById(req.params._id);
        res.json(tournaId);
    }
    catch (err) {
        res.send('Error:' + err);
    }
});

router.post('/addTournaments', async (req, res) => {
    const tournamentForm = new tournamentDa({
        TournamentName:req.body.TournamentName,
        StartDate:req.body.StartDate,
        EndDate: req.body.EndDate,
        OrgEmail:req.body.OrgEmail,
        OrgPhone:req.body.OrgPhone,
        TournamentType: req.body.TournamentType,
        Venue: req.body.Venue,
        State: req.body.State,
        City: req.body.City,
        Broadcast: req.body.Broadcast,
        Sponsorship: req.body.Sponsorship,
        PrizeMoney: req.body.PrizeMoney,
        RegFees: req.body.RegFees,
        Overs: req.body.Overs,
    });
    try {
        tournamentForm.save(tournamentForm)
            .then(addtour => {
                res.send(addtour);
            })
    }
    catch (err) {
        res.send('Error:' + err);
    }
});

router.delete('/:_id', (req, res) => {
    tournamentDa.findByIdAndRemove(req.params._id)
        .then(res => {
            res.json({ msg: 'User Deleted' })
        })
        .catch(err => {
            res.json(err)
        })
});

// router.put('/', (req, res) => {
//     tournamentDa.findOneAndUpdate(
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
    tournamentDa.findOneAndUpdate(
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