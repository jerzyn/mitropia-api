function getGame(gameId) {
    let boardStatus = {
        gameId: "xxxxx",
        playerCount: 2,
        nextPlayer: "qwerty",
        boardStatus: {
            boardSize: 5,
            player1: [{}],
            player2: [{}],
            mountains: [{}],
            tunnels: [{}],
            castles: [{}]
        },
        _links: {
            _self: "/games/xxxxx"
        }
    }
    return boardStatus
}