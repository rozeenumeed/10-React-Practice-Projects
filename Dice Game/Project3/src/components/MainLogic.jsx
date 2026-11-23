
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Dice1, Dice2, Dice3, Dice4, Dice5, Dice6
} from 'lucide-react';

const MainLogic = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState(null);
  const [rolling, setRolling] = useState(false);
  const [userNumber, setuserNumber] = useState();
  const [RandNumber, setRandNum] = useState();
  const [score, setScore] = useState(0);
  const [dice, setDice] = useState(<Dice1 size={140}/>);

  const DicrArray = [
    <Dice1 size={140}/>,
    <Dice2 size={140}/>,
    <Dice3 size={140}/>,
    <Dice4 size={140}/>,
    <Dice5 size={140}/>,
    <Dice6 size={140}/>
  ];

  function ShowRules() {
    navigate('/Rules');
  }

  function UserChoice(e) {
    const value = Number(e.target.innerText);
    setuserNumber(value);
    setSelected(value);
  }

  function RollDice() {
     setRolling(true);
    let num = Math.floor(Math.random() * 6);
    setRandNum(num + 1);

    let NewDIice = DicrArray[num];
    setDice(NewDIice);

    if (userNumber === num + 1) {
      setScore(score + 5);
      setSelected(null);
    }
  }
  function ResetScore(){
    setScore(0);
  }
  return (
    <div className='h-screen w-screen'>

      <div className='flex justify-between h-[23%]'>

        <div className='ml-8 gap-3 flex flex-col justify-center items-center'>
          <h1 className='font-bold text-5xl'>{score}</h1>
          <p className='font-bold'>Total Score</p>
        </div>

        <div className='mt-10 mr-8 flex flex-col gap-3'>

          <div className='flex gap-3 [&>div]:h-12 [&>div]:w-12 [&>div]:border [&>div]:border-black [&>div]:flex [&>div]:items-center [&>div]:justify-center [&>div]:font-bold [&>div]:hover:bg-black [&>div]:cursor-pointer [&>div]:hover:text-white'>

            <div onClick={UserChoice} className={selected === 1 ? 'bg-black text-white' : ''}>1</div>

            <div onClick={UserChoice} className={selected === 2 ? 'bg-black text-white' : ''}>2</div>

            <div onClick={UserChoice} className={selected === 3 ? 'bg-black text-white' : ''}>3</div>

            <div onClick={UserChoice} className={selected === 4 ? 'bg-black text-white' : ''}>4</div>

            <div onClick={UserChoice} className={selected === 5 ? 'bg-black text-white' : ''}>5</div>

            <div onClick={UserChoice} className={selected === 6 ? 'bg-black text-white' : ''}>6</div>

          </div>

          <p className='font-bold text-end'>Select Number</p>

        </div>
      </div>

      <div className='w-screen gap-8 h-[77%] flex flex-col items-center'>

        <div className='w-60 h-60 mt-8 flex flex-col gap-5 justify-center items-center bg-gray-200'>
          <i onClick={RollDice}  className={`cursor-pointer ${rolling? 'dice-roll':''}`} onAnimationEnd={() => setRolling(false)} > {dice}</i>
          <p>Click to roll dice</p>
        </div>

        <div className='w-screen flex flex-col gap-5 justify-center items-center [&>button]:cursor-pointer'>

          <button
            onClick={ResetScore}
            className='border-2 w-60 h-8'
          >
            Reset Score
          </button>

          <button onClick={ShowRules} className='bg-black w-60 h-8 text-white'>
            Show Rules
          </button>

        </div>
      </div>
    </div>
  )
}

export default MainLogic
