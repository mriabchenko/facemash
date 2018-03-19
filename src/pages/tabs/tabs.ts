import { Component } from '@angular/core';

import { RatingPage } from '../rating/rating';
import { ProfilePage } from '../profile/profile';
import { ComparePage } from '../compare/compare';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public tab1Root = ComparePage;
  public tab2Root = RatingPage;
  public tab3Root = ProfilePage;

  public constructor() {

  }
}
