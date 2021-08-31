import './App.css';
import rock from './image/rock.png';
import paper from './image/paper.png';
import scissors from './image/scissors.png';
import OverLay from './component/OverLay';
import Score from './component/Score';
import PlayerVsComputer from './component/PlayerVsComputer';
import Choices from './component/Choices';
import { useState } from 'react';

function App() {
  const [player, setPlayer] = useState(scissors);
  const [computer, setComputer] = useState(scissors);
  const [win, setWin] = useState(0);
  const [draw, setDraw] = useState(0);
  const [lose, setLose] = useState(0);
  const [total, setTotal] = useState(0);

  function click(playerRoll) {
    if (playerRoll === 1) {
      setPlayer(rock);
    }
    if (playerRoll === 2) {
      setPlayer(paper);
    }
    if (playerRoll === 3) {
      setPlayer(scissors);
    }
    
    let computerRoll = Math.floor(Math.random() * 3 + 1);

    if (computerRoll === 1) {
      setComputer(rock)
    }
    if (computerRoll === 2) {
      setComputer(paper)
    }
    if (computerRoll  === 3) {
      setComputer(scissors)
    }

    if (playerRoll === computerRoll) {
      setDraw(draw + 1);
      setTotal(total + 1);
    }
    else if (playerRoll === 1 && computerRoll === 2) {
      setLose(lose + 1);
      setTotal(total + 1);
    }
    else if (playerRoll === 1 && computerRoll === 3) {
      setWin(win + 1);
      setTotal(total + 1);
    }
    else if (playerRoll === 2 && computerRoll === 1) {
      setWin(win + 1);
      setTotal(total + 1);
    }
    else if (playerRoll === 2 && computerRoll === 3) {
      setLose(lose + 1);
      setTotal(total + 1);
    }
    else if (playerRoll === 3 && computerRoll === 1) {
      setLose(lose + 1);
      setTotal(total + 1);
    }
    else if (playerRoll === 3 && computerRoll === 2) {
      setWin(win + 1);
      setTotal(total + 1);
    }
  }

  let reset = () => {
    setWin(0);
    setLose(0);
    setDraw(0);
    setTotal(0);
  }

  return (
    <div className="App">

      {total === 10 ? (
        <OverLay
          win={win}
          lose={lose}
          draw={draw}
          reset={reset}
        />
      ) : null}
      
      <h1 className="status">Rock paper scissors</h1>
      <div className="container">

        <PlayerVsComputer
          player={player}
          computer={computer}
        />

        <hr />
        <h2>Player chooses</h2>
        
        <Choices
          rock={rock}
          paper={paper}
          scissors={scissors}
          click={click}
        />

        <Score
          win={win}
          draw={draw}
          lose={lose}
        />
        
        <button className="btn btn-primary" onClick={reset}>Reset score</button>

      </div>
    </div>
  );
}

export default App;
