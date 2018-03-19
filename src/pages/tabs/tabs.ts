import { Component } from '@angular/core';

import { RatingPageComponent } from '../rating/rating';
import { ProfilePageComponent } from '../profile/profile';
import { ComparePageComponent } from '../compare/compare';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPageComponent {

  public tab1Root = ComparePageComponent;
  public tab2Root = RatingPageComponent;
  public tab3Root = ProfilePageComponent;

  public constructor() {

  }
}
