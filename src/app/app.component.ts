import { Component } from '@angular/core';
import { CurriculumModel } from 'src/model/curriculum.model';
import { CurriculumData } from 'src/data/curriculum.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curriculo-v2';

  public data: CurriculumModel;

  constructor() {
    this.data = CurriculumData
  }

}
