import React from "react";
import MetaInput from "./metaInput";
import { Updates } from "../../../types/enums";
import { characterObject } from "../../../types/character";


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
