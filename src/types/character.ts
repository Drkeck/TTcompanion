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
  baseAttackBonus: string
}

export interface characterObject {
  meta: CharMeta
  stats: CharStats 
}