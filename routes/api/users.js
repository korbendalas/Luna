// Autentifikacija korisnika 

const express = require('express');

const router = express.Router();

// @route GET    /api/users/test
// @description  Testira users route
// @acsess       Public (api)
router.get('/test',(req, res)=>res.json({msg:'Users Works!'}));

module.exports = router; 