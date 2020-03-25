import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {

  @Input() lesson: any[] = [
    { name: 'Calculus', credits: 4 },
    { name: 'Logic Math', credits: 3 },
    { name: 'Numeric System', credits: 2 }
  ];
  @Input() name: string;

  constructor() { }

}
