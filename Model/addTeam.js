const mongoose = require("mongoose");

var TeamSchema  = new mongoose.Schema({
    TeamName:{
        type: String,
    },
    CoachName:{
        type:String,
    },
    Email:{
        type:String,
    },

    Pname1:{
        type:String,
    },
    Page1:{
        type:String,
    },
    Ptype1:{
        type:String,
    },

    Pname2:{
        type:String,
    },
    Page2:{
        type:String,
    },
    Ptype2:{
        type:String,
    },

    Pname3:{
        type:String,
    },
    Page3:{
        type:String,
    },
    Ptype3:{
        type:String,
    },

    Pname4:{
        type:String,
    },
    Page4:{
        type:String,
    },
    Ptype4:{
        type:String,
    },

    Pname5:{
        type:String,
    },
    Page5:{
        type:String,
    },
    Ptype5:{
        type:String,
    },

    Pname6:{
        type:String,
    },
    Page6:{
        type:String,
    },
    Ptype6:{
        type:String,
    },

    Pname7:{
        type:String,
    },
    Page7:{
        type:String,
    },
    Ptype7:{
        type:String,
    },

    Pname8:{
        type:String,
    },
    Page8:{
        type:String,
    },
    Ptype8:{
        type:String,
    },

    Pname9:{
        type:String,
    },
    Page9:{
        type:String,
    },
    Ptype9:{
        type:String,
    },

    Pname10:{
        type:String,
    },
    Page10:{
        type:String,
    },
    Ptype10:{
        type:String,
    },

    Pname11:{
        type:String,
    },
    Page11:{
        type:String,
    },
    Ptype11:{
        type:String,
    },
   





    Phone:{
        type:String,
    },
    State:{
        type:String,
    },
    City:{
        type:String,
    },
});

module.exports = mongoose.model('TeamData',TeamSchema);
