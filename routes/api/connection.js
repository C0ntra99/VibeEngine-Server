//const express = require('express')
const express = require('express')
const router = express.Router();

//Maybe this should return some sort of key idk yet who really cares
router.get('/', (req, res) => {
    return res.json({status:200, Connection:"Good"})
})

module.exports = router;