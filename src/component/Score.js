export default function Score({win, draw, lose}){
  return (
    <div className="d-flex justify-content-between mt-3">
      <h2 className="score">Win: {win}</h2>
      <h2 className="score">Draw: {draw}</h2>
      <h2 className="score">Lose: {lose}</h2>
    </div>
  )
}