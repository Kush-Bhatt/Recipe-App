import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-app';

  loadedFeature : string = "recipe";

  onNavigate(selectedHeader : string)
  {
    this.loadedFeature = selectedHeader;
  }

}
