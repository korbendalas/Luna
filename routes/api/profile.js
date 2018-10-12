//Profili korisnika

const express = require('express');

const router = express.Router();

// @route GET     /api/profile/test
// @description   Testira profile route
// @acsess        Public (api)
router.get('/test',(req, res)=>res.json({msg:'Profile Works!'}));

module.exports = router; 