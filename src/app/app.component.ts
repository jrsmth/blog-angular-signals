import { Component, computed, effect, signal, Signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {

  // Signal :: Writable
  miles: WritableSignal<number> = signal(0);

  // Signal :: Computed
  kilometers: Signal<number> = computed(() => Math.round(1.60934 * this.miles()));

  constructor() {
    // Signal :: Effect
    effect(() => {
      console.log(`The current mileage is: ${this.miles()}`);
    });
  }

  increaseVolume(): void {
    this.miles.update((value) => value + 1);
  }

}
