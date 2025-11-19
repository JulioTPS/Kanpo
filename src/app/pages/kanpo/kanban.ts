import { Component, signal, WritableSignal } from '@angular/core';
import { KanbanColumn } from './models/kanaban';

@Component({
  selector: 'app-kanban',
  imports: [],
  templateUrl: './kanban.html',
  styleUrl: './kanban.scss',
})
export class App {
  // protected readonly title = signal('Kanpo');
  columns: WritableSignal<KanbanColumn[]> = signal([
    {
      title: 'To Do',
      cards: [],
    },
    {
      title: 'In Progress',
      cards: [],
    },
    {
      title: 'Review',
      cards: [],
    },
    {
      title: 'Done',
      cards: [],
    },
  ]);
}
