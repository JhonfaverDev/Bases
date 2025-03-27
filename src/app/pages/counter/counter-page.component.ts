import { Component } from '@angular/core';


@Component({
  template: `
  <h1>Hola Mundo {{counter}}</h1> // Aqui se muestra el valor del contador
  <button (click)="increaseBy(1)">Incrementar</button> // Aqui se incrementa el valor del contador
  `,
})
export class CounterPageComponent {
  counter = 10;

  increaseBy(value: number) {
    this.counter += value;
  }

}
