import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-learn',
  imports: [CommonModule,RouterModule],
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.css'
})
export class LearnComponent {
categories = [
  {
    title: 'uPVC',
    description: 'Explore uPVC window and door profiles.',
    link: 'upvc'
  },
  {
    title: 'Aluminium',
    description: 'Learn about aluminium frames and systems.',
    link: 'aluminium'
  },
  {
    title: 'Glass',
    description: 'Understand glass types and their uses.',
    link: 'glass'
  },
  {
    title: 'Hardware',
    description: 'Discover essential window and door hardware.',
    link: 'hardware'
  }
];


}
