export interface MultipleWinnersModel {
  years: Array<Year>;
}

export interface Year {
  year: number;
  winnerCount: number;
}
