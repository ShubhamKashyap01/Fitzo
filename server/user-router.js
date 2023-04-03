const express = require("express");

const router = express.Router();


router.get('/login', (req, res) => {
    console.log(req.query,'req');
    console.log(req.body,'body');
    res.json(200, req.body);
});

module.exports = router;