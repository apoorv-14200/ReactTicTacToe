import React from "react";

class Banner extends React.Component
{
  constructor()
  {
    super();
  }
  render()
  {
    let winner=this.props.winner;
    let showBoard=this.props.showBoard;
    let turn=this.props.turn;
    let texttoshow="";
    let p1=this.props.p1;
    let p2=this.props.p2;
    if(showBoard==false)
    {
      texttoshow="Click on Start Button";
    }
    else if(winner.length==0)
    {
        texttoshow=`${turn==0?p1:p2}'s Turn`;
    }
    else
    {
      if(winner=='3')
      {
        texttoshow="The Match is Draw!";
      }
      else
      {
        texttoshow=`${winner=='1'?p1:p2} Won!`;
      }
    }
    return(
    <div className="Banner">
        <div className="banner-text">{texttoshow}</div>
        {showBoard && <button className="reset-btn" onClick={()=>this.props.resetState()}>Reset Game</button>}
    </div>
    );
  }
}

export default Banner;
