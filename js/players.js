import { CreatePlayer } from './createPlayers.js';

export class Players {
  constructor() {
    this.players = [];
  }

  creatingPlayers(name) {
    this.players.push(new CreatePlayer(name));
  }

  getPlayers() {
    return this.players;
  }
}
