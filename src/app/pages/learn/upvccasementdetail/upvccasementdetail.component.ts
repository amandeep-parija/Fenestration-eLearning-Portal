import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upvccasementdetail',
  imports: [CommonModule],
  templateUrl: './upvccasementdetail.component.html',
  styleUrl: './upvccasementdetail.component.css'
})
export class UpvccasementdetailComponent {

  profileTypes = [
    {
      title: 'uPVC Casement Window',
      image: 'assets/upvc-casement.jpg',
      description: 'Casement uPvc Windows are hinged at the side and open outward like a door. Best for ventilation and soundproofing.'
    },
    {
      title: 'uPVC Sliding Window',
      image: 'assets/upvc-sliding.jpg',
      description: 'Sliding uPVC windows glide horizontally and are ideal for space-saving and modern aesthetics.'
    },
    {
      title: 'uPVC Monorail Window',
      // image:to be update soon,
      description: 'Casement uPvc Windows are hinged at the side and open outward like a door. Best for ventilation and soundproofing.'
    },
    {
      title: 'uPVC Swing & Slide Window',
      // image:to be update soon,
      description: 'uPVC Swing and Slide windows offer versatile opening options with a combination of swinging and sliding panels, ideal for larger openings and easy ventilation.'
    },
  ]
}
