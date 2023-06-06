const mongoose = require("mongoose");

var tournamentSchema  = new mongoose.Schema({
    TournamentName:{
        type: String,
    },
    StartDate:{
        type:Date,
        default:Date.now
    },
    EndDate:{
        type:Date,
        default:Date.now
    },
    OrgEmail:{
        type:String,
    },
    OrgPhone:{
        type:String,
    },
    TournamentType:{
        type:String,
    },
    Venue:{
        type:String,
    },
    State:{
        type:String,
    },
    City:{
        type:String,
    },
    Broadcast:{
        type:String,
    },
    Sponsorship:{
        type:String,
    },
    PrizeMoney:{
        type:String,
    },
    RegFees:{
        type:String,
    },
    Overs:{
        type:String,
    }
});

module.exports = mongoose.model('TournamentData',tournamentSchema);
