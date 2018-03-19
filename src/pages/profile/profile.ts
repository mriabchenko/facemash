import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePageComponent implements OnInit {

  public constructor(public navCtrl: NavController) {

  }

  public ngOnInit(): void {
    this.test();
  }

  /**
   * Firebase test function
   */
  private test(): void {

  }
}
