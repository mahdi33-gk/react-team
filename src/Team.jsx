import { useState } from "react"

export default function Team (){
    const [team, setTeam] = useState(11);

    const addTeam=()=>{
        const newTeam = team + 1;
        setTeam(newTeam)

    }

    const removeTeam =()=>{
        const newTeam =team - 1;
        setTeam(newTeam);
    }


    const someStyle = {
        border:"2px solid red",
        padding: "4px"
    }

    return(
        <div style={someStyle}>
            <h3>players: {team} </h3>
            <button onClick={addTeam}>add</button>
            <button onClick={removeTeam}>Remove</button>
        </div>
    )
}