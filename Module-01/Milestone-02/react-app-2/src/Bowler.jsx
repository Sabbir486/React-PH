import { useState } from "react"

export default function Bowler(){

    const [bowl, setBowl] = useState(0);

    const handleBowl = () => {
        const updateBowl = bowl + 1;
        setBowl(updateBowl);
    }

    return(
        <div>
            <h2>Bowler Name: Mustafizur</h2>
            <h2>Bowl Count: {bowl}</h2>

            {
                bowl == 6 && <p>It's Over</p>
            }

            <button onClick={handleBowl}>Count</button>
        </div>
    )
}