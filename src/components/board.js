import React from "react";
import Cell from "./cell";

class Board extends React.Component {
  constructor() {
    super();
  }
  render() {
    const boardarray = this.props.boardarray;
    return (
      <div className="Board">
        {boardarray.map((cell, index) => {
          return (
            <Cell
              key={index}
              id={index}
              cellbox={cell}
              CellClick={this.props.CellClick}
              getturn={this.props.getturn}
            />
          );
        })}
      </div>
    );
  }
}

export default Board;
