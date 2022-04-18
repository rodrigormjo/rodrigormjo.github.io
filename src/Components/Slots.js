import React, { useState } from 'react';
import ding from '../sounds/ding.wav';
import dong from '../sounds/dong.wav';

function Slots () {
  const startBalls = ["??", "??", "??", "??", "??", "??"];
  const [numberBalls, setBalls] = useState(startBalls);

  // useEffect(() => {
  //   // rollBalls();
  // }, [numberBalls]);

  const plusOneBall = () => {
    if (numberBalls.length < 15) {
      const x = numberBalls.concat(["??"]);
      const ding = document.getElementById("ding");
      setBalls(x);
      ding.pause();
      ding.currentTime = 0;
      ding.play();
    }    
  }

  const minusOneBall = () => {    
    if (numberBalls.length > 6) {      
      const dong = document.getElementById("dong");      
      setBalls((balls) => balls.filter((_, i) => i !== balls.length - 1));
      dong.pause();
      dong.currentTime = 0;
      dong.play();
    }
  }

  const cartela = () => {
    let element = [];
    for (let i = 1; i < 61; i += 1) {
      if(i < 10) {
        element.push(`0${i}`);
      }
      if(i >= 10) {
        element.push(i.toString());
      }
    }
    return element;
  };

  const RNG = (hit) => {
    const x = Math.floor(Math.random()*(60 - hit));
    return x;
  }

  const rollBalls = () => {
    let cardNumbers = cartela();
    let x = numberBalls;
    let tick = 0;
    let check = 0;
    let flag = true;    
    const dong = document.getElementById("dong");
    
    const time = setInterval(() => {
      tick += 1;
      if(check === x.length - 1 && tick === 7) {
        flag = false;        
        clearInterval(time);
      }      
      if(tick > 6) {
        check += 1;
        tick = 0;                
      }
      if (flag) { 
        dong.pause();
        dong.currentTime = 0;
        dong.play();
        for (let i = check; i < x.length; i++) {
          x[i] = cardNumbers[RNG(i)];
        }  
        setBalls(x);
        setBalls(numberBalls.concat(["??"]));
        setBalls((balls) => balls.filter((_, i) => i !== balls.length - 1));   
        console.log(`tick = ${tick}`);
        console.log(`check = ${check}`);
      }
    }, 200);
  }

  console.log(numberBalls);

  return (
    <div className='slots'>
      <span>
        Teste sua sorte!       
      </span>
      <span>
        Escolha até 15 bolas e aperte o botão mágico para receber números especiais!
      </span>
      <br />
      <div className='ballNumbers'>
        <button className='ballNumbers' type='button' onClick={() => minusOneBall()}>-</button>
        <span>{numberBalls.length}</span>
        <button className='ballNumbers' type='button' onClick={() => plusOneBall()}>+</button>
      </div>
      <br />
      <div className='ballKeeper'>
        {
          numberBalls.map(
            (element, index) => <div key={index} className="balls">{element}</div>
          )
        }
      </div>
      <br />
      <button type="button" className="sorteButton" onClick={() => rollBalls()}>
        &#127808;botão mágico&#127808;
      </button>    
      <audio preload="auto" id="ding">
        <source src={ding} type="audio/wav" />
      </audio>
      <audio preload="auto" id="dong">
        <source src={dong} type="audio/wav" />
      </audio>
    </div>
  )
}

export default Slots;
