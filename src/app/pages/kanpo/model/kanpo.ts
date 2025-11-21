export enum KanpoColumnType {
  ToDo = 0,
  InProgress = 1,
  Review = 2,
  Done = 3,
}

export interface KanpoColumn {
  type: KanpoColumnType;
  title: string;
  cards: KanpoCard[];
}

export interface KanpoCard {
  id: string;
  columnType: KanpoColumnType;
  title: string;
  difficulty: number;
  impact: number;
  affectedScreen: number;
}
