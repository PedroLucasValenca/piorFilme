export interface ProducersModel {
  min: Producer;
  max: Producer;
}

export interface Producer {
  producer: string;
  interval: number;
  previousWin: number;
  followingWin: number;
}
