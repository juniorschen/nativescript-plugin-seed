import { Component } from '@angular/core';

/* template: `
<ActionBar>
  <Label text="Its Works with Build"></Label>
</ActionBar>
`,
styles: [] */
@Component({
  selector: "test",
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  constructor() {
    console.log('hi i alive');
  }
}