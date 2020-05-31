const router = require("express").Router();
const bcrypt = require("bcryptjs")

router.get("/turn", (req,res) => {
    const turnHash = bcrypt.hashSync(`${Math.random()}`, 12)
    res.status(200).json(turnHash)
})  

module.exports = router;