import React from 'react'
import circle from './assets/circle.png'
import cross from './assets/cross.png'

const Tictactoe = () => {
  const [board, setBoard] = React.useState(Array(9).fill(""))
  const [count, setCount] = React.useState(0)
  const [lock, setLock] = React.useState(false)
  const [winner, setWinner] = React.useState(null)

  // All possible winning combinations
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6]           // diagonals
  ]

  const toggle = (index) => {
    if (lock || board[index] !== "") return

    const newBoard = [...board]
    const player = count % 2 === 0 ? "cross" : "circle"
    newBoard[index] = player

    setBoard(newBoard)
    setCount(count + 1)

    // Check for winner
    for (let pattern of winPatterns) {
      const [a,b,c] = pattern
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        setWinner(player)
        setLock(true)
        return
      }
    }

    // Check for draw
    if (!newBoard.includes("") && !winner) {
      setWinner("draw")
      setLock(true)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(""))
    setCount(0)
    setLock(false)
    setWinner(null)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">

      <h1 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
        Tic Tac Toe game in <span className="text-blue-500">React</span>
      </h1>

      {/* Winner message */}
      {winner && (
        <div className="text-xl font-bold text-yellow-400 mb-4">
          {winner === "draw" ? "It's a Draw!" : `${winner === "cross" ? "X" : "O"} Wins!`}
        </div>
      )}

      {/* Game Board */}
      <div className="grid grid-cols-3 gap-4">
        {board.map((cell, index) => (
          <div
            key={index}
            className={`w-24 h-24 bg-white rounded-lg shadow flex items-center justify-center cursor-pointer 
                        ${lock || cell ? "pointer-events-none opacity-80" : "hover:scale-105 transition"}`}
            onClick={() => toggle(index)}
          >
            {cell === "cross" && <img src={cross} alt="cross" className="w-12" />}
            {cell === "circle" && <img src={circle} alt="circle" className="w-12" />}
          </div>
        ))}
      </div>

      {/* Reset Button */}
      <button
        onClick={resetGame}
        className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Reset Game
      </button>

    </div>
  )
}

export default Tictactoe