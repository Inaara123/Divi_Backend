const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment');

// Create an appointment
router.post('/', async (req, res) => {
  const { name, contact } = req.body;
  try {
    const appointment = new Appointment({ name, contact });
    await appointment.save();
    res.json(appointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create an appointment' });
  }
});

module.exports = router;
