import React from "react"
import Levelselection from "./level"
import BaseInput from "./baseInput"
import BaBInput from "./bab"

function MetaSelector({ identifier, value, onChange }: { identifier: string, value: string | number, onChange: any }) {
  switch (identifier) {
    case "level":
      const levelValue = Number(value)
      return <Levelselection identifier={identifier} value={levelValue} update={onChange} />
    case "baseAttackBonus":
      const numberValue = Number(value)
      return <BaBInput identifier={identifier} value={numberValue} update={onChange} />
    case "name":
    case "class":
    default:
      const stringValue = `${value}`
      return <BaseInput identifier={identifier} value={stringValue} onChange={onChange} />
  }
}

function MetaInput({ identifier, value, update }: { identifier: string, value: string | number, update: (name: string, value: string | number) => void }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 30px 0 0', }}>
      <h2 style={{ margin: 'auto 10px' }}>{identifier}:</h2>
      <MetaSelector identifier={identifier} value={value} onChange={update} />
    </div>
  )
}

export default MetaInput