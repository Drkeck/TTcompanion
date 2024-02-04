import React from "react";

export enum updates {
  statUpdate,
  metaUpdate,
  characterLoad,
  default
}

export interface CharStats {
  Strength: number,
  Dexterity: number,
  Constitution: number,
  Intelligence: number,
  Wisdom: number,
  Charisma: number
}

export interface CharMeta {
  name: string,
  level: number
}

export interface characterObject {
  meta: CharMeta
  stats: CharStats 
}

function charReducer(state: characterObject, action: {type:updates, update: any}) {
  switch(action.type) {
    case updates.statUpdate:
      return {
        meta: state.meta,
        stats: {
          ...state.stats, [action.update.Name]: action.update.value
        }
      }
    case updates.metaUpdate:
      return {
        meta: {
          ...state.meta, [action.update.Name]: action.update.value
        },
        stats: state.stats
      }
    case updates.characterLoad:
      return action.update
    default:
      return {
        meta: {
         name: '',
         level: 1,
        },
        stats: {
         Strength: 8,
         Dexterity: 8,
         Constitution: 8,
         Intelligence: 8,
         Wisdom: 8,
         Charisma: 8
        }
      }
  }
}

// ToDo: update this to take more info and handle updates properly.
function useCharacterHook(): {
  statefulData: {characterObj: characterObject},
  updateCharacter: (type: updates, Update: any) => void
  loadCharacter: (characterLoad: characterObject) => void
} {

  const [characterObj, dispatcher] = React.useReducer(charReducer,{
    meta: {
      name: '',
      level: 1,
    },
    stats: {
        Strength: 8,
        Dexterity: 8,
        Constitution: 8,
        Intelligence: 8,
        Wisdom: 8,
        Charisma: 8
  }
    })

  // update this function
  function updateCharacter(type: updates ,Update:string | number) {
    dispatcher({type: type, update: Update})
  }

  function loadCharacter(characterLoad: characterObject)  {
    dispatcher({type: updates.characterLoad, update:characterLoad})
  }

  return {
    statefulData: {characterObj},
    updateCharacter,
    loadCharacter
  }
}

export default useCharacterHook
