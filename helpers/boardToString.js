const boardToString = board => {
    let output = "--A-B-C-D-E-F-G-H-\n"
    for (let row in board) {
        output += `${row}|` + JSON.stringify(board[row]).split(/[\"\[\]]/).join("").split(",").join("|") + "|\n"
        
    }
    output += "------------------\n"
    return output
}

const testBoard = [ ["x","x","x","o","-","-","-","-"],
                    ["-","-","-","-","-","-","-","-"],
                    ["-","-","-","-","-","x","-","-"],
                    ["-","-","-","-","-","o","-","-"],
                    ["-","-","-","-","-","-","-","-"],
                    ["-","-","x","o","x","-","-","-"],
                    ["-","-","-","o","-","-","-","-"],
                    ["-","-","-","-","-","-","-","-"]]

console.log(boardToString(testBoard))


module.exports = boardToString;