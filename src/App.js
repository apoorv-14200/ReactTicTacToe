import React from "react";
import Board from "./components/board";
import Banner from "./components/Banner";
import Start from "./components/start-btn";

/*
----> 1 
----> 2
----> 3

| | |
| | |
v v v
4 5 6 

principle diagonal=7
anti diagonal=8;
*/
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      turn: 0,
      boardarray: [
        {
          val: -1,
          cut: "",
        },
        {
          val: -1,
          cut: "",
        },
        {
          val: -1,
          cut: "",
        },
        {
          val: -1,
          cut: "",
        },
        {
          val: -1,
          cut: "",
        },
        {
          val: -1,
          cut: "",
        },
        {
          val: -1,
          cut: "",
        },
        {
          val: -1,
          cut: "",
        },
        {
          val: -1,
          cut: "",
        },
      ],
      winner: "",
      showBoard: false,
      playerone: "",
      playertwo: "",
      finished: false,
    };
  }
  checkWinner = () => {
    let x = 0;
    let y = 0;
    let first = 1;
    let second = 1;
    const boardarray = this.state.boardarray;
    while (x < 3 && y < 3) {
      let indx = x * 3 + y;
      if (boardarray[indx].val != 0) {
        first = 0;
      }
      if (boardarray[indx].val != 1) {
        second = 0;
      }
      x++;
      y++;
    }
    if (first) {
      return "17";
    }
    if (second) {
      return "27";
    }
    x = 0;
    y = 0;
    first = 1;
    second = 1;
    while (x < 3 && y < 3) {
      let indx = x * 3 + y;
      if (boardarray[indx].val != 0) {
        first = 0;
      }
      if (boardarray[indx].val != 1) {
        second = 0;
      }
      y++;
    }
    if (first) {
      return "11";
    }
    if (second) {
      return "21";
    }
    x = 0;
    y = 0;
    first = 1;
    second = 1;
    while (x < 3 && y < 3) {
      let indx = x * 3 + y;
      if (boardarray[indx].val != 0) {
        first = 0;
      }
      if (boardarray[indx].val != 1) {
        second = 0;
      }
      x++;
    }
    if (first) {
      return "14";
    }
    if (second) {
      return "24";
    }
    x = 0;
    y = 1;
    first = 1;
    second = 1;
    while (x < 3 && y < 3) {
      let indx = x * 3 + y;
      if (boardarray[indx].val != 0) {
        first = 0;
      }
      if (boardarray[indx].val != 1) {
        second = 0;
      }
      x++;
    }
    if (first) {
      return "15";
    }
    if (second) {
      return "25";
    }
    x = 0;
    y = 2;
    first = 1;
    second = 1;
    while (x < 3 && y < 3) {
      let indx = x * 3 + y;
      if (boardarray[indx].val != 0) {
        first = 0;
      }
      if (boardarray[indx].val != 1) {
        second = 0;
      }
      x++;
    }
    if (first) {
      return "16";
    }
    if (second) {
      return "26";
    }
    x = 1;
    y = 0;
    first = 1;
    second = 1;
    while (x < 3 && y < 3) {
      let indx = x * 3 + y;
      if (boardarray[indx].val != 0) {
        first = 0;
      }
      if (boardarray[indx].val != 1) {
        second = 0;
      }
      y++;
    }
    if (first) {
      return "12";
    }
    if (second) {
      return "22";
    }
    x = 2;
    y = 0;
    first = 1;
    second = 1;
    while (x < 3 && y < 3) {
      let indx = x * 3 + y;
      if (boardarray[indx].val != 0) {
        first = 0;
      }
      if (boardarray[indx].val != 1) {
        second = 0;
      }
      y++;
    }
    if (first) {
      return "13";
    }
    if (second) {
      return "23";
    }
    x = 0;
    y = 2;
    first = 1;
    second = 1;
    while (x < 3 && y >= 0) {
      let indx = x * 3 + y;
      if (boardarray[indx].val != 0) {
        first = 0;
      }
      if (boardarray[indx].val != 1) {
        second = 0;
      }
      y--;
      x++;
    }
    if (first) {
      return "18";
    }
    if (second) {
      return "28";
    }
    for (x = 0; x < 9; x++) {
      if (boardarray[x].val == -1) {
        return "0";
      }
    }
    return "3";
  };
  CellClick = (id) => {
    let boardarray = this.state.boardarray;
    let turn = this.state.turn;
    let finished = this.state.finished;
    if (boardarray[id].val == -1 && finished == false) {
      if (turn == 0) {
        boardarray[id].val = 0;
      } else {
        boardarray[id].val = 1;
      }
      turn = 1 - turn;
      this.setState({
        turn: turn,
        boardarray: boardarray,
      });
    }
    console.log(this.state);
    let win = this.checkWinner();
    console.log(win);
    boardarray = this.state.boardarray;
    if (win[0] == "1" || win[0] == "2") {
      let x = 0,
        y = 0;
      switch (win[1]) {
        case "1": {
          console.log("inside 1");
          x = 0;
          y = 0;
          while (x < 3 && y < 3) {
            let indx = x * 3 + y;
            boardarray[indx].cut = "line-horizontal";
            y++;
          }
          break;
        }
        case "2": {
          console.log("inside 2");
          x = 1;
          y = 0;
          while (x < 3 && y < 3) {
            let indx = x * 3 + y;
            boardarray[indx].cut = "line-horizontal";
            y++;
          }
          break;
        }
        case "3": {
          console.log("inside 3");
          x = 2;
          y = 0;
          while (x < 3 && y < 3) {
            let indx = x * 3 + y;
            boardarray[indx].cut = "line-horizontal";
            y++;
          }
          break;
        }
        case "4": {
          console.log("inside 4");
          x = 0;
          y = 0;
          while (x < 3 && y < 3) {
            let indx = x * 3 + y;
            boardarray[indx].cut = "line-vertical";
            x++;
          }
          break;
        }
        case "5": {
          console.log("inside 5");
          x = 0;
          y = 1;
          while (x < 3 && y < 3) {
            let indx = x * 3 + y;
            boardarray[indx].cut = "line-vertical";
            x++;
          }
          break;
        }
        case "6": {
          x = 0;
          y = 2;
          while (x < 3 && y < 3) {
            let indx = x * 3 + y;
            boardarray[indx].cut = "line-vertical";
            x++;
          }
          break;
        }
        case "7": {
          x = 0;
          y = 0;
          while (x < 3 && y < 3) {
            let indx = x * 3 + y;
            boardarray[indx].cut = "tilt";
            x++;
            y++;
          }
          break;
        }
        case "8": {
          x = 0;
          y = 2;
          while (x < 3 && y >= 0) {
            let indx = x * 3 + y;
            boardarray[indx].cut = "anti-tilt";
            y--;
            x++;
          }
          break;
        }
        default: {
        }
      }
      this.setState({
        winner: win[0],
        boardarray: boardarray,
        finished: true,
      });
    } else if (win[0] == "3") {
      this.setState({
        winner: win[0],
        boardarray: boardarray,
        finished: true,
      });
    }
  };
  getturn = () => {
    return this.state.turn;
  };
  startgame = (p1, p2) => {
    console.log(p1, p2);
    if (p1.length != 0 && p2.length != 0) {
      this.setState({
        showBoard: true,
        playerone: p1,
        playertwo: p2,
      });
    } else {
      alert("One or more Player Name missing!");
    }
  };
  setplayername = (p1, p2) => {
    this.setState({
      playerone: p1,
      playertwo: p2,
    });
  };
  resetState = () => {
    this.setState({
      turn: 0,
      boardarray: [
        {
          val: -1,
          cut: "",
        },
        {
          val: -1,
          cut: "",
        },
        {
          val: -1,
          cut: "",
        },
        {
          val: -1,
          cut: "",
        },
        {
          val: -1,
          cut: "",
        },
        {
          val: -1,
          cut: "",
        },
        {
          val: -1,
          cut: "",
        },
        {
          val: -1,
          cut: "",
        },
        {
          val: -1,
          cut: "",
        },
      ],
      winner: "",
      showBoard: false,
      finished: false,
    });
  };
  render() {
    return (
      <div>
        <Banner
          resetState={this.resetState}
          turn={this.state.turn}
          winner={this.state.winner}
          showBoard={this.state.showBoard}
          p1={this.state.playerone}
          p2={this.state.playertwo}
        />
        {this.state.showBoard ? (
          <Board
            boardarray={this.state.boardarray}
            CellClick={this.CellClick}
            getturn={this.getturn}
          />
        ) : (
          <Start startgame={this.startgame} />
        )}
      </div>
    );
  }
}

export default App;
