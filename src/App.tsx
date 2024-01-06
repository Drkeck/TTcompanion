import React from "react";
import "./App.css";
import CharacterSheet from "./pages/characterSheet/characterSheet";
import CharactersView from "./pages/charactersView/charactersView";

enum Tabs {
  CharacterSheet = "characterSheet",
  CharactersView = "charactersView"
}
function Display({tab}:{tab:Tabs}) {
 switch (tab) {
  case Tabs.CharacterSheet:
    return <CharacterSheet/>
  case Tabs.CharactersView:
    return <CharactersView />
 } 
}

function App() {
  const [tab, setTab] = React.useState<Tabs>(Tabs.CharactersView);

  return (
    <>
      <button
        onClick={() => setTab(Tabs.CharactersView)}
      >{Tabs.CharactersView}</button>
      <button
        onClick={() => setTab(Tabs.CharacterSheet)}
      >{Tabs.CharactersView}</button> 
      <h1>{tab}</h1>
      <Display tab={tab}/>
    </>
  );
}

export default App;
