## Types for CS:GO Game State Integration

### Example:
```ts
// Type to use when user is spectating 
interface GameStateSpectating {
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

// Type to use when user is playing
interface GameStatePlaying {
  provider: Provider
  map: Map
  round: Round
  player: PlayerPlaying
  previously?: PreviouslyPlaying
  added?: AddedPlaying
  auth: Auth
}
```

### How to use:
```ts
import { GameStateSpectating } from 'csgo-gsi-types'

const latestGameState: GameStateSpectating
```

### Module:
```ts
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
```