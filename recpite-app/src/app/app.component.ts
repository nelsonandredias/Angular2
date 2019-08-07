import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loadedFeature = 'recipe';

  /* change the component feature selected based on the header */
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
