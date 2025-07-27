import React from "react";
import { Updates } from "../../../types/enums";
import { characterObject } from "../../../types/character";

function MetaInput({identifier, value, update}:{identifier: string, value: string | number, update: (name:string, value: string| number) => void}) {
  const checker = (identifier === "level")
    return (
    <div style={{display: 'flex', justifyContent: 'space-between', margin: '0 30px 0 0',}}>
      <h2 style={{margin: 'auto 10px'}}>{identifier}:</h2>
    {Number.isInteger(value) ? <button
      onClick={() => {
          if (value === 1) return
          update(identifier, value - 1)}
        }
      >-</button> : null}
    <input
    type={checker ? "number" : "text"}
    value={!value ? '' : value}
    placeholder={identifier}
    min={checker ? 1 : undefined}
    max={checker ? 20 : undefined}
    onChange={(e) => {
          if (checker) return
          update(identifier, `${e.target.value}`)
    }
    }/>
    {Number.isInteger(value) ? <button
      onClick={() => {
          if (value === 20) return
          update(identifier, value + 1)}
        }
      >+</button> : null}
    </div>
  )
}

function MetaInfo({meta, update}: { meta: characterObject['meta'], update: (arg1:Updates, arg2:any) => void }) {
  const entries = Object.entries(meta)

  console.log(entries)
  function updateMeta(name: string, value: string | number) {
    update(Updates.metaUpdate, {Name: name, value: value})
  }

  return(
    <div style={{display: 'flex', justifyContent: 'space-between', width: '50%'}}>
      {entries.map(([key, value]) => (
        <MetaInput key={key} identifier={key} value={value} update={updateMeta}/>
      ))}
    </div>
  )
}

export default MetaInfo
