const express = require('express');
const router = express.Router();
const res = require("express/lib/response");


// require the Drone model here
const Drones = require('../models/Drone.model');

router.get("/drones", async (req, res, next) => {
  try {
    const drones = await Drones.find({});
    res.render('drones/list', { drones })
  } catch (error) {
    next(error)
  }
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    res.render('drones/create-form')
  } catch (error) {
    next(error)
  }
});

router.post('/drones/create',async (req, res, next) => {
  const {name,propellers,maxSpeed} = req.body;
  const parsedPropellers = parseInt(propellers);
  const parsedMaxSpeed = parseInt(maxSpeed);
  try {
    await Drones.create({ name, propellers: parsedPropellers, maxSpeed: parsedMaxSpeed });
    res.redirect('/drones');
  } catch (error) {
    res.render('/drones/create-form')
    next(error)
  }
  });


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
