import {useRef, useState} from 'react'
import ResultModal from './ResultModal';

// let timer;

export default function TimerChallenge({title, targetTime}) {

    const timer = useRef();
    const dialog = useRef();

//   const [timerSt, setTimerSt] = useState(false);  
//   const [timerExp, setTimerExp] = useState(false);  

    const [timeRemain, setTimeRemain] = useState(targetTime * 1000);

    const timerActive = timeRemain > 0 && timeRemain < targetTime * 1000;

    function handleReset() {
        setTimeRemain(targetTime * 1000);
    }

    if( timeRemain <=0 ) {
        clearInterval(timer.current);
        // setTimeRemain(targetTime * 1000);
        dialog.current.open();
    }

function handleStart() {
//     setTimerSt(true);
//     timer.current = setTimeout(() => {
//         setTimerExp(true); 
//         dialog.current.open();
//     }, targetTime * 1000);
    timer.current = setInterval(() => {
        setTimeRemain(prevTime => prevTime - 10);
    });
}

function handleStop() {
    dialog.current.open();
   clearInterval(timer.current); 
}

    return(
        <>
        <ResultModal ref={dialog} targetTime={targetTime} timeRemain={timeRemain} onReset={handleReset}/>
        <section className="challenge">
            <h2>{title}</h2>
            {/* {timerExp && <p>You Lost</p>} */}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerActive ? handleStop : handleStart}>
                    {timerActive ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerActive ? 'active' : undefined}>
                { timerActive ? 'Time is running' : 'Timer inactive'}
            </p>
        </section>
        </>
    );
}