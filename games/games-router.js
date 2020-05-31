const router = require("express").Router();
const bcrypt = require("bcryptjs")

router.get("/turn", (req,res) => {
    // new turn detected
    // update game
    const turnHash = bcrypt.hashSync(`${Math.random()}`, 12)
    // insert as "nextTurn" into turn database
    // 
    res.status(200).json(turnHash)
})  

module.exports = router;