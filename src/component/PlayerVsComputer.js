export default function PlayerVsComputer({player,computer }){
    return (
      <div className="d-flex justify-content-between play">
        <div className="player me-5">
          <h2 className="player-name ">You</h2>
          <img src={player} alt="" className="player-choice"></img>
        </div>
        <div className="player">
          <h2 className="player-name">Computer</h2>
          <img src={computer} alt="" className="computer-choice"></img>
        </div>
      </div>
    )
  }