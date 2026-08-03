const express = require("express");
const router = express.Router();
const events = require("../data/events.json");

// Get all events
router.get("/", (req, res) => {
    res.json(events);
});

// Get event by ID
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const event = events.find(e => e.id === id);

    if (!event) {
        return res.status(404).json({
            message: "Event not found"
        });
    }

    res.json(event);
});

module.exports = router;