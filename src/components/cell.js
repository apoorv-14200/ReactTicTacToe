import React from "react";

class Cell extends React.Component {
  constructor() {
    super();
  }
  get_char(type) {
    if (type == -1) {
      return "";
    } else if (type == 0) {
      return "O";
    } else {
      return "X";
    }
  }
  render() {
    const id = this.props.id;
    const type = this.props.cellbox.val;
    const turn = this.props.getturn();
    return (
      <div className="Cell">
        <div className={this.props.cellbox.cut}></div>
        <button
          onClick={() => this.props.CellClick(id)}
          className={turn == 0 ? "cell-btn" : "cell-btn-black"}
        >
          {this.get_char(type)}
        </button>
      </div>
    );
  }
}

export default Cell;
