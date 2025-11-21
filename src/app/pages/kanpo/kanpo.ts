import { Component, signal, WritableSignal } from '@angular/core';
import { KanpoCard, KanpoColumn, KanpoColumnType } from './model/kanpo';

@Component({
  selector: 'app-kanpo',
  imports: [],
  templateUrl: './kanpo.html',
  styleUrl: './kanpo.scss',
})
export class Kanpo {
  columns: WritableSignal<KanpoColumn[]> = signal([
    { type: KanpoColumnType.ToDo, title: 'To Do', cards: [] },
    { type: KanpoColumnType.InProgress, title: 'In Progress', cards: [] },
    { type: KanpoColumnType.Review, title: 'Review', cards: [] },
    { type: KanpoColumnType.Done, title: 'Done', cards: [] },
  ]);

  constructor() {
    this.columns.update((cols) => {
      cols[0].cards.push({
        id: '1',
        columnType: KanpoColumnType.ToDo,
        title: 'Sample Task',
        difficulty: 3,
        impact: 5,
        affectedScreen: 2,
      });
      return cols;
    });
  }
}
