import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aluminium',
  imports: [RouterModule,CommonModule],
  templateUrl: './aluminium.component.html',
  styleUrl: './aluminium.component.css'
})
export class AluminiumComponent {
    profileTypes = [
    {
      title: 'Aluminium Casement Window',
      image: 'assets/upvc-casement.jpg',
      description: 'Casement uPvc Windows are hinged at the side and open outward like a door. Best for ventilation and soundproofing.'
    },
    {
      title: 'Aluminium Sliding Window',
      // image:to be update soon,
      description: 'Sliding uPVC windows glide horizontally and are ideal for space-saving and modern aesthetics.'
    },
    {
      title: 'Aluminium Monorail Window',
      // image:to be update soon,
      description: 'Casement uPvc Windows are hinged at the side and open outward like a door. Best for ventilation and soundproofing.'
    },
    {
      title: 'Aluminium Lift n Slide',
      // image:to be update soon,
      description: 'uPVC Lift and Slide windows offer enhanced sealing, thermal insulation, and effortless operation, ideal for wide openings and panoramic views.'
    },
    {
      title: 'Aluminium Swing & Slide Window',
      // image:to be update soon,
      description: 'uPVC Swing and Slide windows offer versatile opening options with a combination of swinging and sliding panels, ideal for larger openings and easy ventilation.'
    },
  ]

}
