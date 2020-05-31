const {exec} = require("child_process");

module.exports = _ => {
    exec("zecwallet-cli.exe list", (err, stdout, stderr) => {
        if (err) {
            console.log("error listing wallet txns")
        }
        console.log(stdout);
        console.log(stderr)
    })
}