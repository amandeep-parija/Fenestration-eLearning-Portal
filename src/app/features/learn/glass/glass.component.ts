import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-glass',
  imports: [RouterModule,CommonModule],
  templateUrl: './glass.component.html',
  styleUrl: './glass.component.css'
})
export class GlassComponent {
  profileTypes = [
        {
  title: 'Tempered Glass',
  image: 'assets/images/glass-tempered.jpg',
  description: 'Tempered glass is heat-treated for extra strength and safety. It shatters into small blunt pieces, making it ideal for windows and doors.'
},
{
  title: 'Laminated Glass',
  image: 'assets/images/glass-laminated.jpg',
  description: 'Laminated glass consists of two or more glass layers bonded with a PVB layer, offering safety, UV protection, and sound insulation.'
},
{
  title: 'Insulated Glass Unit (IGU)',
  image: 'assets/images/glass-igu.jpg',
  description: 'IGU or DGU features two glass panes separated by a spacer and gas-filled gap for enhanced thermal and sound insulation.'
},
{
  title: 'Low-E Glass',
  image: 'assets/images/glass-lowe.jpg',
  description: 'Low-E (Low Emissivity) glass has a special coating that reflects heat while allowing light, improving energy efficiency in buildings.'
},
{
  title: 'Tinted Glass',
  image: 'assets/images/glass-tinted.jpg',
  description: 'Tinted glass reduces glare and solar heat gain, available in various shades like grey, bronze, green, and blue.'
},
{
  title: 'Reflective Glass',
  image: 'assets/images/glass-reflective.jpg',
  description: 'Reflective glass has a metallic coating that reflects sunlight, offering privacy and reducing cooling load in buildings.'
}

  ]

}
