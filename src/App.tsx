import React from "react";
import "./App.css";
import CharacterSheet from "./pages/characterSheet/characterSheet";
import CharactersView from "./pages/charactersView/charactersView";
import useFileSystem from "./hooks/filesystem";
import useCharacterHook, { characterObject, updates } from "./hooks/useCharacterHook";

enum Tabs {
  CharacterSheet = "characterSheet",
  CharactersView = "charactersView"
}
function Display({tab, load, setTab, updateCharacter, characterObj}:{tab:Tabs, load: (file: string | undefined) => Promise<void>, setTab:(tab: Tabs) => void, updateCharacter: (type: updates, update: any) => void , characterObj: characterObject}) {
  
  function goBack() {
    setTab(Tabs.CharactersView)
  }

  function newChar() {
    updateCharacter(updates.default, {})
    setTab(Tabs.CharacterSheet)
  }

 switch (tab) {
  case Tabs.CharacterSheet:
    return <CharacterSheet setTab={goBack} updateCharacter={updateCharacter} characterObj={characterObj}/>
  case Tabs.CharactersView:
    return <CharactersView load={load} newChar={newChar}/>
 } 
}

function App() {
  const [tab, setTab] = React.useState<Tabs>(Tabs.CharactersView);
  const {statefulData: {characterObj}, updateCharacter, loadCharacter} = useCharacterHook()
  const {load} = useFileSystem()

  async function loadSelectedCharacter(file:string | undefined) {
    const charData = await load(file)
    loadCharacter(charData)
    setTab(Tabs.CharacterSheet)
  }

  return (
    <>
      <Display tab={tab} load={loadSelectedCharacter} setTab={setTab} updateCharacter={updateCharacter} characterObj={characterObj}/>
    </>
  );
}

export default App;
