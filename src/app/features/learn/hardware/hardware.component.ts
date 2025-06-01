import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hardware',
  imports: [RouterModule,CommonModule],
  templateUrl: './hardware.component.html',
  styleUrl: './hardware.component.css'
})
export class HardwareComponent {
  profileTypes = [
    {
  title: 'Friction Stay Hinge',
  image: 'assets/images/hardware-friction-stay.jpg',
  description: 'Allows casement windows to open and stay in position. Essential for side-hung or top-hung sashes.'
},
{
  title: 'Espagnolette Handle',
  image: 'assets/images/hardware-espag-handle.jpg',
  description: 'A stylish handle that controls the locking mechanism in casement windows and doors.'
},
{
  title: 'Sliding Roller',
  image: 'assets/images/hardware-sliding-roller.jpg',
  description: 'Enables smooth sliding movement for sashes in sliding window and door systems.'
},
{
  title: 'Crescent Lock',
  image: 'assets/images/hardware-crescent-lock.jpg',
  description: 'Basic locking mechanism for sliding windows, offering easy operation and decent security.'
},
{
  title: 'Touch Lock',
  image: 'assets/images/hardware-touch-lock.jpg',
  description: 'A push-to-lock mechanism used in swing and sliding systems for a clean, modern locking option.'
},
{
  title: 'Multi-point Locking System',
  image: 'assets/images/hardware-multipoint-lock.jpg',
  description: 'Secures a sash at multiple points for enhanced protection and sealing — common in premium doors.'
},
{
  title: 'Shoot Bolt',
  image: 'assets/images/hardware-shoot-bolt.jpg',
  description: 'Locks sash from top and bottom vertically, usually used in French windows or double doors.'
},
{
  title: 'Pop-up Handle',
  image: 'assets/images/hardware-popup-handle.jpg',
  description: 'Folds flat when not in use and pops up to grip. Common in sliding systems for space saving.'
},
{
  title: 'Roller Lock',
  image: 'assets/images/hardware-roller-lock.jpg',
  description: 'Combines a locking mechanism with a rolling action, used in modern sliding systems.'
},
{
  title: 'Tower Bolt',
  image: 'assets/images/hardware-tower-bolt.jpg',
  description: 'A traditional bolt that provides manual locking for internal doors or additional leafs.'
},
{
  title: 'Handle with Key Lock',
  image: 'assets/images/hardware-handle-key.jpg',
  description: 'A handle with an in-built key mechanism for added child safety and external locking.'
},
{
  title: 'Stay Arm',
  image: 'assets/images/hardware-stay-arm.jpg',
  description: 'Helps keep windows open at fixed angles, offering controlled ventilation.'
},
{
  title: 'D Handle',
  image: 'assets/images/hardware-d-handle.jpg',
  description: 'Common pull handle used on sliding doors. Provides a firm and easy grip.'
},
{
  title: 'Corner Connector',
  image: 'assets/images/hardware-corner-connector.jpg',
  description: 'Used to join profiles at corners during fabrication, ensuring frame strength and alignment.'
},
{
  title: 'Concealed Hinge',
  image: 'assets/images/hardware-concealed-hinge.jpg',
  description: 'Hidden hinge for minimalist aesthetics and clean opening mechanisms.'
},
{
  title: 'Anti-Lift Block',
  image: 'assets/images/hardware-anti-lift-block.jpg',
  description: 'Prevents sash from being lifted off the sliding track — adds anti-theft protection.'
},
{
  title: 'Door Closer',
  image: 'assets/images/hardware-door-closer.jpg',
  description: 'Automatically closes a door after opening — useful for main entrances and commercial doors.'
},
{
  title: 'Flush Bolt',
  image: 'assets/images/hardware-flush-bolt.jpg',
  description: 'Discreetly locks inactive doors in a double-door setup — slides into frame from the sash.'
},
{
  title: 'Pivot Hinge',
  image: 'assets/images/hardware-pivot-hinge.jpg',
  description: 'Allows a sash to rotate on a central axis — used in heavy-duty or designer doors.'
},
{
  title: 'Sliding Track',
  image: 'assets/images/hardware-sliding-track.jpg',
  description: 'Guides the rollers for smooth sash movement — a key base element in sliding windows.'
},
{
  title: 'Vent Lock',
  image: 'assets/images/hardware-vent-lock.jpg',
  description: 'Restricts window opening to allow safe ventilation without fully opening the sash.'
},
{
  title: 'Glass Connector Clip',
  image: 'assets/images/hardware-glass-clip.jpg',
  description: 'Used to connect fixed glass to the frame without a visible frame — clean look for partitions.'
},
{
  title: 'Stay Bar',
  image: 'assets/images/hardware-stay-bar.jpg',
  description: 'Stabilizes large casement sashes and prevents over-swinging — often paired with restrictors.'
},
{
  title: 'Lift Handle',
  image: 'assets/images/hardware-lift-handle.jpg',
  description: 'Used in lift-and-slide systems to lift the sash before sliding, ensures sealed locking.'
}

  ]

}
