const express = require('express');
const router = express.Router();
const res = require("express/lib/response");
// require the Drone model here
const Drone = require('../models/Drone.model');


router.get("/drones", async (req, res, next) => {
  try {
    const drones = await Drone.find({});
    res.render('drones/list', {drones})
  } catch (error) {
    next(error)
  }
});

router.get('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post('/drones/create', async (req, res, next) => {
      const {name, propellers, maxSpeed} = req.body;
      const propellersInt = parseInt(propellers)
      const maxSpeedInt = parseInt(maxSpeed)
  try {
      await Drone.create({name, propellers:propellersInt, maxSpeed: maxSpeedInt });
      res.redirect("/drones");
  } catch (error) {   
      res.render('/drones/create-form')
      next(error)
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
    // Iteration #4: Update the drone
      const { id } = req.params;
  try {
      const drone = await Drone.findById(id);  
      res.render('drones/update-form', drone);       
  } catch (error) {
      next(error) 
  }   
  });
  
router.post('/drones/:id/edit', async (req, res, next) => {
    // Iteration #4: Update the drone
      const { id } = req.params;
      const { name, propellers, maxSpeed } = req.body;
      const propellersInt = parseInt(propellers);
      const maxSpeedInt = parseInt(maxSpeed);
  try {
     await Drone.findByIdAndUpdate(id, { name, propellers:propellersInt, maxSpeed: maxSpeedInt });
     console.log("Just updated:");
      res.redirect("/drones");  
  } catch (error) {
      res.redirect(`/drones/${id}/edit`);
  } 
 });

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
