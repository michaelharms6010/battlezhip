const boardToString = board => {
    let output = "----------------\n"
    for (let row in board) {
        output += JSON.stringify(row) + "\n"
        output += "----------------\n"
    }
    return output
}

const testBoard = [ ["x","x","x","o","-","-","-","-"],
                    ["x","x","x","o","-","-","-","-"],
                    ["x","x","x","o","-","-","-","-"],
                    ["x","x","x","o","-","-","-","-"],
                    ["x","x","x","o","-","-","-","-"],
                    ["x","x","x","o","-","-","-","-"],
                    ["x","x","x","o","-","-","-","-"],
                    ["x","x","x","o","-","-","-","-"]]


module.exports = boardToString;