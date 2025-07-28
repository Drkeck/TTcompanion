export interface CharStats {
  Strength: number,
  Dexterity: number,
  Constitution: number,
  Intelligence: number,
  Wisdom: number,
  Charisma: number
}

export enum BaseAttackBonus {
  Full = 1,
  Partial = 0.75,
  Half = 0.5
}

export interface CharMeta {
  name: string,
  level: number
  class: string
  baseAttackBonus: BaseAttackBonus
}


export interface characterObject {
  meta: CharMeta
  stats: CharStats
}

export const defaultCharacter:characterObject = {
  meta: {
    name: '',
    level: 1,
    class: '',
    baseAttackBonus: BaseAttackBonus.Full
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
