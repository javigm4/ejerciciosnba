export class Nba {
  team;
  source;
  player;
  limit;

  constructor(team, source, player, limit) {
    this.team = team;
    this.source = source;
    this.player = player;
    this.limit = limit;
  }

  //---getters
  getTeam() {
    return this.team;
  }

  getSource() {
    return this.source;
  }

  getPlayer() {
    return this.player;
  }

  getLimit() {
    return this.limit;
  }
  //---setters

  setTeam(newTeam) {
    this.team = newTeam;
  }
  setSource(newSource) {
    this.source = newSource;
  }
  setPlayer(newPlayer) {
    this.player = newPlayer;
  }
  setLimit(newLimit) {
    this.limit = newLimit;
  }
}
