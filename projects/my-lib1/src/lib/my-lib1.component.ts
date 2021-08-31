import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib1',
  template: `
    <p>
      my-lib1 works!
      <button pButton type="button" label="Click" ></button>
    </p>
  `,
  styles: [
  ]
})
export class MyLib1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
