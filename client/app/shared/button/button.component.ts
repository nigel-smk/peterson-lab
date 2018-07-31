import { Component } from '@angular/core';

@Component({
  selector: 'button[app-button]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent { }
