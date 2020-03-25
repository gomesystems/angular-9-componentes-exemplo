import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent{

  // declare property
  private pickLesson = '';

  @Input()
  set lesson(lsn: string) {
    this.pickLesson = (lsn && lsn.trim() || 'No lesson available today');
  }

  get lesson(): string { return this.pickLesson; }

}
