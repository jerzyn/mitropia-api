function playMove(move, gameId, playerId) {
    let board = getBoard(gameId)
    if (validateMove(move) === false) 
        return false
    board.playerId += "12d1d"
    return board
}

function validateMove(gameId) {
    return true
}
function getBoard(gameId) {
    return boardStatus
}