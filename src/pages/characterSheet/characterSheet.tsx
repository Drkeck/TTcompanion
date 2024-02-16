import React from "react"
import StatsPanel from "./components/stats"
import useFileSystem from "../../hooks/filesystem"
import MetaInfo from "./components/metaInfo"
import './index.css'
import { characterObject } from "../../hooks/useCharacterHook"

function CharacterSheet({setTab, updateCharacter, characterObj}:{setTab:any, updateCharacter:any, characterObj: characterObject}) {
  const {save} = useFileSystem()

  function saveInput() {
    save(characterObj)
  }

  return (
    <div style={{margin: '2%'}}>
      <div style={{ display: 'flex', justifyContent: 'end'}}>
       <button onClick={() => saveInput()}>Save</button>
       <button onClick={() => setTab()}>X</button>
      </div>
      <div className="window metasWindow">
       <MetaInfo meta={characterObj.meta} update={updateCharacter}/>
      </div>
      <StatsPanel stats={characterObj.stats} update={updateCharacter}/>
    </div>
  )
}
export default CharacterSheet
