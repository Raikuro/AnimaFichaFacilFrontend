export interface Character {
  stats: {
    agility: number
    constitution: number
    dexterity: number
    strength: number
    inteligence: number
    perception: number
    power: number
    will: number
  }
  weapon: WeaponType
  advantage: Advantage[]
  disadvantage: Disadvantage[]
  languages: string[]
  categories: Category[] // minimo 1 maximo 5
  categoryChanges: CategoryChange[] // minimo 1 maximo 5
  combatEquipment: {
    weapons: Weapon[]
    armors: Armor[]
    headArmor: HeadArmor
    note: string
  }
}
export type Advantage = string
export type Disadvantage = string
export type WeaponType = string
export type ArmorType = string

export interface Category {
  id: string
  level: number
  development: Map<string, number>
}
export interface CategoryChange {
  old: number
  new: number
}
export interface Weapon {
  type: WeaponType
  hands: 1 | 2
  size: Size
  quality: number
  enchanted: boolean
}

export interface Armor {
  type: ArmorType
  quality: number
  enchanted: boolean
}
export type HeadArmor = Armor

export enum Size {
  Normal,
  Big,
  Huge,
}
