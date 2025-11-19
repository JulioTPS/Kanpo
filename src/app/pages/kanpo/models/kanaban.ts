export interface KanbanColumn {
  title: string;
  priority?: number;
  cards: KanbanCard[];
}

export interface KanbanCard {
  title: string;
  affectedScreen: number;
  dificulty: number;
  impact: number;
}
