const express = require('express');

const router = express.Router();


// @route        GET /api/posts/test
// @description  Testira post route
// @acsess       Public (api)
router.get('/test',(req, res)=>res.json({msg:'Posts Works!'}));

module.exports = router;