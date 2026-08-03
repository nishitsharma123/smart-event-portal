const express = require("express");

const router = express.Router();

const events = require("../data/events.json");



// Get All Events

router.get("/", (req,res)=>{

    res.status(200).json(events);

});



// Get Single Event

router.get("/:id",(req,res)=>{

    const id = parseInt(req.params.id);

    const event = events.find(e=>e.id===id);

    if(!event){

        return res.status(404).json({

            success:false,

            message:"Event not found"

        });

    }

    res.status(200).json(event);

});



module.exports = router;