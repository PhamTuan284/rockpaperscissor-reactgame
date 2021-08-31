export default function OverLay({win,lose,draw,reset}){
    return (
      <div className="overLay">
        <div className="card" style={{width: '18rem'}}>
          <div className="card-header">
          {win === lose ? (<h2>Draw</h2>) : win > lose ? (<h2>You win</h2>) : (<h2>You lose</h2>)}
          </div>
          <div className="card-body">
            <p className="card-text">Win: {win} - Draw: {draw} - Lose: {lose}</p>
            <button className="btn btn-primary" onClick={reset}>Play again</button>
          </div>
        </div>
    </div>
    )
  }