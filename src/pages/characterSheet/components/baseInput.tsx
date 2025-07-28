import React from "react"

function BaseInput({identifier, value, onChange}:{identifier: string, value: string, onChange: any}) {
  return(
    <input 
      type="text"
      value={!value ? '' : value}
      placeholder={identifier}
      onChange={(e) => {
        onChange(identifier, `${e.target.value}`)
      }}
    />
  )
}

export default BaseInput