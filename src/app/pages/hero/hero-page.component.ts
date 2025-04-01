import { Component, computed, signal } from '@angular/core';


@Component({
  templateUrl: './hero-page.component.html',
})

export class HeroPageComponent {
  name = signal('Ironman'); // Hero name señal
  age = signal(45); // Hero age señal

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  }) // Hero description señal computada

  // getHeroDescription() {
  //   return `${this.name()} - ${this.age()}`;
  // }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeAge() {
    this.age.set(50);

  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

}
