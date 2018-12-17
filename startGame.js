const crypto = require('crypto')
const redis = require('redis')

const secret = 'mitropia'
const client = redis.createClient()

client.on('connect', function() {
    console.log('connected')
});

function startGame (boardSize = 5, playerCount = 2) {
    const gameId = crypto.createHmac('sha256', secret).update(Date.now().toString(36)).digest('hex').slice(32)

    const board = {
        gameId: gameId,
        playerCount: playerCount,
        boardStatus: {
            boardSize: boardSize,
            player1: [],
            player2: [],
            mountains: [],
            tunnels: [],
            castles: []
        }
    }
    console.log(gameId)
    client.set(gameId, JSON.stringify(board))

    return board
}

let hex = startGame()
console.log(client.get(hex.gameId))

function terrainFeatures() {

}