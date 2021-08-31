export default function Choices({rock, paper, scissors, click}){
    return (
      <div className="d-flex justify-content-between mt-3">
      <img src={rock} alt="" className="choices" onClick={() => click(1)}></img>
      <img src={paper} alt="" className="choices" onClick={() => click(2)}></img>
      <img src={scissors} alt="" className="choices" onClick={() => click(3)}></img>
    </div>
    )
  }
  