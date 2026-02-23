import { useState } from "react"

export default function Player(){

    // Hook State --> State Declaration

    const [run, setRun] = useState(0);
    const [six, setSix] = useState(0);

    const handleSingle = () => {
        const updateRunSingle = run + 1;
        setRun(updateRunSingle);
    }

    const handleFour = () => {
        const updateFour = run + 4;
        setRun(updateFour);
    }

    const handleSix = () => {
        const updateSix = run + 6;
        const updateCount = six + 1;
        setSix(updateCount);
        setRun(updateSix);
    }

    // const handleSixCount = () => {
    //     const updateSixCount = six + 1;
    //     setSix(updateSixCount);
    // }

    return(
        <div>
            <h3>Player: Bangla Batsman</h3>
            <h2>Score: {run}</h2>
            <h2>Six Count: {six}</h2>

            {
                run >= 50 && <p>CONGRATULATIONS!!!</p>
            }

            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Fours</button>
            {/* <button onClick={() => { handleSix(); handleSixCount(); }}>Sixes</button> */}

            <button onClick={handleSix}>Six</button>

        </div>
    )
}