import React, { useState } from 'react'
import Tile from './Tile'

const Minesweeper = () => {
  const [grid, setGrid] = useState([...Array(10).keys()]
    .map(() => [...Array(10).keys()]
      .map(() => ({ isBomb: Math.random() > 0.5, isRevealed: false }))))

  const handleClick = (rowIndex, colIndex) => {
    const nextGrid = grid.map((row, i) => row.map((col, j) => {
      if(i === rowIndex && j === colIndex){
        return { ...col, isRevealed: true }
      }
      return col
    }))
    setGrid(nextGrid)
  }

  const getNumberOfAdjacentBombs = (rowIndex, colIndex) => {
    let counter = 0
    for(var i = -1; i <= 1; i++){
      for(var j = -1; j <= 1; j++) {
        if(i === 0 && j === 0) {
          continue
        }
        const row = grid[rowIndex + i]
        if(!row){
          continue
        }
        const item = row[colIndex + j]
        if(!item) {
          continue
        }
        if(item.isBomb) {
          counter += 1
        }
      }
    }
    return counter
  }
  return (
    <table>
      <tbody>
        {grid.map((row, rowIndex) => <tr
          style={{ padding: 0 }} 
          key={rowIndex}>
          {row.map((item, colIndex) => 
            <Tile 
              key={colIndex} 
              onClick={() => handleClick(rowIndex, colIndex)}
              isBomb={item.isBomb}
            >{item.isRevealed && getNumberOfAdjacentBombs(rowIndex, colIndex)}
            </Tile>)}
        </tr>)}
      </tbody>
    </table>
  )
}

export default Minesweeper