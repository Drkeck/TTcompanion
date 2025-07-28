import React from "react";
import { BaseAttackBonus } from "../../../types/character";

function BaBInput({identifier, value, update}:{identifier: string, value: number, update: any}) {
  return(
    <select name={`${identifier}`} value={value} onChange={(e) => update(identifier, e.target.value)}>
      <option value={BaseAttackBonus.Full}>Full</option>
      <option value={BaseAttackBonus.Partial}>Partial</option>
      <option value={BaseAttackBonus.Half}>Half</option>
    </select>
  )
}

export default BaBInput