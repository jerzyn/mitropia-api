const redis = require('redis')

const client = redis.createClient()

client.on('connect', function() {
    console.log('connected')
});

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

function getGames() {
    let games = client.get('*')
    
    console.log(games)

    return games
}

console.log(getGames())
