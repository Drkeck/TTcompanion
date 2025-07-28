import React from "react";

function Levelselection({identifier, value, update}:{identifier: string, value: number, update: any}) {
  return (
    <>
      <button onClick={() => {
        if (value === 1) return
        update(identifier, value - 1)
      }}
      >-</button>
      <input 
        style={{}}
        id={identifier}
        value={value}
        min={1}
        max={20}
        onChange={(e) => update(identifier, e.target.value)}
      />
      <button onClick={() => {
        if (value === 20) return
        update(identifier, value + 1)
      }}>+</button>
    </>
  )
}

export default Levelselection