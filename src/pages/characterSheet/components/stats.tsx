import React from "react"
import { Updates } from "../../../types/enums"
import { characterObject } from "../../../types/character"

function StatPoint({statName, statValue, update}: {statName: string, statValue: number, update:(type: Updates.statUpdate, statUpdate: any) => void}) {
 const title = statName.toLocaleUpperCase().slice(0,3)
  function updateStat(value:number) {
   update(Updates.statUpdate, {Name:statName, value:value})
  }
  
  return(
    <div className="statRow">
      <p className="statLabel">{title}</p>
      <div className="statInputContainer">
        <button onClick={() => {
          if(statValue === 0) return;
          updateStat(statValue - 1)
        }}>-</button>
        <input type="number" className='statTotal' value={statValue} onChange={(e) => updateStat(Number.parseInt(e.target.value))}/>
        <button onClick={() => {
          if (statValue === 99) return;
          updateStat(statValue + 1)
        }}>+</button>
      </div>
      <p className="statMod">{Math.floor((statValue - 10)/2)}</p>
    </div>
  )
}


function StatsPanel({stats, update}:{stats:characterObject["stats"], update:(type:Updates.statUpdate ,statUpdate: any) => void}) {
  const statBreakdown = Object.entries(stats)
  return(
  <div className="window statsWindow">
      <h1 style={{margin: '0 0 10px 0 ', textAlign: 'center'}}>Stats</h1>
     {statBreakdown.map(([key, entry]) => (
        <StatPoint key={key} statName={key} statValue={entry} update={update}/>
     ))} 
  </div>
  )
}

export default StatsPanel
