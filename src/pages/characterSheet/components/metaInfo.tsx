import React from "react";
import { characterObject, updates } from "../../../hooks/useCharacterHook";

function MetaInput({identifier, value, update}:{identifier: string, value: string | number, update: (name:string, value: string| number) => void}) {
    return (
    <>
    {identifier === "level" ? <button
      onClick={() => update(identifier, value)}
      >-</button> : null}
    <input
    type={identifier === "name" ? "text" : "number"}
    value={!value ? undefined : value}
    placeholder={identifier}
    min={identifier === "level" ? 1 : undefined}
    max={identifier === "level" ? 20 : undefined}
    onChange={(e) => {
      console.log(e.target.value)
      update(identifier, e.target.value)}
    }/>
    {identifier === "level" ? <button
      onClick={() => update(identifier, value)}
      >+</button> : null}
    </>
  )
}

function MetaInfo({meta, update}: { meta: characterObject['meta'], update: (arg1:updates, arg2:any) => void }) {
  const entries = Object.entries(meta)

  function updateMeta(name: string, value: string | number) {
    update(updates.metaUpdate, {Name: name, value: value})
  }

  return(
    <div>
      {entries.map(([key, value]) => (
        <MetaInput key={key} identifier={key} value={value} update={updateMeta}/>
      ))}
    </div>
  )
}

export default MetaInfo
