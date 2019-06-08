declare module 'csgo-gsi-types' {
  export import Provider = __GSICSGO.Provider
  export import Map = __GSICSGO.Map
  export import Auth = __GSICSGO.Auth
  export import Player = __GSICSGO.Player
  export import PlayerState = __GSICSGO.PlayerState
  export import PlayerStats = __GSICSGO.PlayerStats
  export import Grenades = __GSICSGO.Grenades
  export import Grenade = __GSICSGO.Grenade
  export import AllPlayers = __GSICSGO.AllPlayers
  export import PlayerList = __GSICSGO.PlayerList
  export import GameStateSpectating = __GSICSGO.GameStateSpectating
  export import GameStatePlaying = __GSICSGO.GameStatePlaying
  export import GameStateMenu = __GSICSGO.GameStateMenu
  export import PhaseCountDown = __GSICSGO.Phase
  export import Bomb = __GSICSGO.Bomb
  export import Round = __GSICSGO.Round
  export import Weapons = __GSICSGO.Weapons
  export import Weapon = __GSICSGO.Weapon

  export import weaponTypes = __GSICSGO.weaponTypes

  export import TeamType = __GSICSGO.TeamType
  export import RoundWinningType = __GSICSGO.RoundWinningType
  export import BombState = __GSICSGO.BombState
  export import MapPhase = __GSICSGO.MapPhase

  export default __GSICSGO
}

declare namespace __GSICSGO {
  export interface GameStateSpectating {
    provider: Provider
    map: Map
    player: Player
    allplayers: AllPlayers
    phase_countdowns: Phase
    grenades?: Grenades
    previously: Previously
    bomb: BombState
    auth: Auth
  }

  export interface GameStateMenu {
    provider: Provider
    player: PlayerMenu
    auth: Auth
  }

  export interface GameStatePlaying {
    provider: Provider
    map: Map
    round: Round
    player: PlayerPlaying
    previously?: PreviouslyPlaying
    added?: AddedPlaying
    auth: Auth
  }

  export interface AddedPlaying {
    round?: {
      bomb?: boolean
      win_team?: boolean
    }
    map?: Map
  }

  export interface Round {
    phase: MapPhase
    bomb?: 'planted' | 'defused' | 'exploded'
    win_team: TeamType
  }

  export interface Previously {
    provider?: Provider
    map?: Map
    player?: Player
    allplayers?: AllPlayers
    phase_countdowns?: Phase
    grenades?: Grenades
    bomb?: BombState
  }

  export interface PreviouslyPlaying {
    provider?: Provider
    map?: Map
    round?: Round
    player?: PlayerPlaying
    auth?: Auth
  }

  export interface Provider {
    name: string
    appid: number
    version: number
    steamid: string
    timestamp: number
  }

  export interface Auth {
    token: string
  }

  export interface Player {
    clan?: string
    steamid: string
    name: string
    observer_slot: ObservatorSlotType
    team: TeamType
    activity: PlayerActivityType
    state: PlayerState
    position: string
    forward: string
    spectarget?: string
  }

  export interface PlayerPlaying {
    clan?: string
    steamid: string
    name: string
    observer_slot: ObservatorSlotType
    team: TeamType
    activity: PlayerActivityType
    state: PlayerState
  }

  export interface PlayerMenu {
    steamid: string
    name: string
    activity: 'menu'
  }

  export interface Grenades {
    [key: string]: Grenade
  }

  export interface Grenade {
    owner?: number
    position: string
    velocity: string
    lifetime: string
    type?: string
    effecttime?: string
  }

  export interface AllPlayers {
    [steamid: string]: PlayerList
  }

  export interface PlayerList {
    clan?: string
    name: string
    observer_slot: ObservatorSlotType
    team: TeamType
    state: PlayerState
    match_stats: PlayerStats
    weapons: Weapons
    position: string
    forward: string
  }

  export type Weapons = {
    [key in WeaponSlotType]?: Weapon
  }

  export type Weapon = weaponTypes.Knife |
    weaponTypes.Pistol |
    weaponTypes.Bomb |
    weaponTypes.Grenade |
    weaponTypes.MachineGun |
    weaponTypes.Rifle |
    weaponTypes.Shotgun |
    weaponTypes.SniperRifle |
    weaponTypes.SubmachineGun

  namespace weaponTypes {
    type WeaponState = 'holstered' | 'active'

    interface Knife {
      type: 'Knife'
      name: 'weapon_knife_t' | 'weapon_knife'
      paintkit: string
      state: WeaponState
    }

    interface Bomb {
      type: 'C4'
      name: 'weapon_c4'
      paintkit: string
      state: WeaponState
    }

    interface Pistol {
      type: 'Pistol'
      name: 'weapon_deagle' |
      'weapon_elite' |
      'weapon_fiveseven' |
      'weapon_glock' |
      'weapon_cz75a' |
      'weapon_hkp2000' |
      'weapon_p250' |
      'weapon_revolver' |
      'weapon_tec9' |
      'weapon_usp_silencer'
      paintkit: string
      ammo_clip: number
      ammo_clip_max: number
      ammo_reserve: number
      state: WeaponState
    }

    export interface Shotgun {
      type: 'Shotgun'
      name: 'weapon_xm1014' | 'weapon_nova' | 'weapon_mag7' | 'weapon_sawedoff'
      paintkit: string
      ammo_clip: number
      ammo_clip_max: number
      ammo_reserve: number
      state: WeaponState
    }

    export interface MachineGun {
      type: 'Machine Gun'
      name: 'weapon_m249' | 'weapon_negev'
      paintkit: string
      ammo_clip: number
      ammo_clip_max: number
      ammo_reserve: number
      state: WeaponState
    }

    export interface SubmachineGun {
      type: 'Submachine Gun'
      name: 'weapon_mac10' |
      'weapon_bizon' |
      'weapon_mp5sd' |
      'weapon_mp7' |
      'weapon_mp9' |
      'weapon_p90' |
      'weapon_ump45'
      paintkit: string
      ammo_clip: number
      ammo_clip_max: number
      ammo_reserve: number
      state: WeaponState
    }

    interface Rifle {
      type: 'Rifle'
      name: 'weapon_ak47' |
      'weapon_aug' |
      'weapon_famas' |
      'weapon_galilar' |
      'weapon_m4a1' |
      'weapon_m4a1_silencer' |
      'weapon_sg556'
      paintkit: string
      ammo_clip: number
      ammo_clip_max: number
      ammo_reserve: number
      state: WeaponState
    }

    interface SniperRifle {
      type: 'SniperRifle'
      name: 'weapon_awp' | 'weapon_g3sg1' | 'weapon_scar20' | 'weapon_ssg08'
      paintkit: string
      ammo_clip: number
      ammo_clip_max: number
      ammo_reserve: number
      state: WeaponState
    }

    interface Grenade {
      type: 'Grenade'
      name: 'weapon_smokegrenade' |
      'weapon_decoy' |
      'weapon_hegrenade' |
      'weapon_incgrenade' |
      'weapon_molotov'
      paintkit: string
      ammo_reserve: number
      state: WeaponState
    }
  }


  export interface PlayerStats {
    kills: number
    assists: number
    deaths: number
    mvps: number
    score: number
  }

  export interface Map {
    mode: string
    name: string
    phase: MapPhase
    round: number
    team_ct: Team
    team_t: Team
    num_matches_to_win_series: number
    current_spectators: number
    souvenirs_total: number
    round_wins?: { [key: string]: RoundWinningType }
  }

  export interface Team {
    name?: string
    score: number
    consecutive_round_losses: number
    timeouts_remaining: number
    matches_won_this_series: number
  }

  export interface Phase {
    phase: MapPhase
    phase_ends_in: string
  }

  export interface Bomb {
    state: BombState
    position: string
    player?: string
    countdown?: string
  }

  export interface PlayerState {
    health: number
    armor: number
    helmet: boolean
    flashed: number
    smoked: number
    burning: number
    money: number
    round_kills: number
    round_killhs: number
    round_totaldmg: number
    equip_value: number
    defusekit?: boolean
  }

  export type WeaponSlotType = 'weapon_0' |
    'weapon_1' |
    'weapon_2' |
    'weapon_3' |
    'weapon_4' |
    'weapon_5' |
    'weapon_6' |
    'weapon_7' |
    'weapon_8' |
    'weapon_9'

  export type RoundWinningType = 'ct_win_time' |
    'ct_win_elimination' |
    't_win_elimination' |
    't_win_bomb' |
    'ct_win_defuse'

  export type PlayerActivityType = 'playing' | 'free' | 'textinput' | 'menu'

  export type ObservatorSlotType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

  export type TeamType = 'CT' | 'T'

  export type BombState = 'planted' | 'planting' | 'exploded' | 'defusing' | 'defused' | 'carried' | 'dropped'

  export type MapPhase = 'freezetime' | 'bomb' | 'warmup' | 'live' | 'over' | 'defuse'
}