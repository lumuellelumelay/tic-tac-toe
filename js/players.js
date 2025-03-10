import { createPlayer } from './player.js';

export class players {
  constructor() {
    this.players = [];
  }

  creatingPlayers(name) {
    this.players.push(new createPlayer(name));
  }

  getPlayers() {
    return this.players;
  }
}
