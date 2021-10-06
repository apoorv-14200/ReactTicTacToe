import React from "react";

class Start extends React.Component
{
  constructor()
  {
    super();
  }
  getplayer1=()=>
  {
      let e=document.getElementById("one");
      return e.value;
  }
  getplayer2=()=>
  {
    let e=document.getElementById("two");
    return e.value;
  }
  render()
  {
    return(
    <div className="Start">
        <input type="text" placeholder="Player 1 name here" id="one"></input>
        <input type="text" placeholder="Player 2 name here" id="two"></input>
        <button className="start-btn" onClick={()=> this.props.startgame(this.getplayer1(),this.getplayer2())}>Start</button>
    </div>
    );
  }
}

export default Start;
