import React from "react";
import { characterObject } from "../types/character";
import { Updates } from "../types/enums";

function charReducer(state: characterObject, action: {type:Updates, update: any}) {
  switch(action.type) {
    case Updates.statUpdate:
      return {
        meta: state.meta,
        stats: {
          ...state.stats, [action.update.Name]: action.update.value
        }
      }
    case Updates.metaUpdate:
      return {
        meta: {
          ...state.meta, [action.update.Name]: action.update.value
        },
        stats: state.stats
      }
    case Updates.characterLoad:
      return action.update
    default:
      return {
        meta: {
          name: '',
          level: 1,
          class: ''
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
  updateCharacter: (type: Updates, Update: any) => void
  loadCharacter: (characterLoad: characterObject) => void
} {

  const [characterObj, dispatcher] = React.useReducer(charReducer,{
    meta: {
      name: '',
      level: 1,
      class:''
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
  function updateCharacter(type: Updates ,Update:string | number) {
    dispatcher({type: type, update: Update})
  }

  function loadCharacter(characterLoad: characterObject)  {
    dispatcher({type: Updates.characterLoad, update:characterLoad})
  }

  return {
    statefulData: {characterObj},
    updateCharacter,
    loadCharacter
  }
}

export default useCharacterHook
