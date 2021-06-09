import { Component } from '@angular/core';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html'
})
export class ServiceListComponent {
  share() {
    window.alert('The service has been shared!');
  }
}
