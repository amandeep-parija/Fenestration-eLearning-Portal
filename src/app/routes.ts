import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { LearnComponent } from './feature/learn/learn.component';
import { QuizComponent } from './feature/quiz/quiz.component';
import { ProgressComponent } from './feature/progress/progress.component';
import { UpvcComponent } from './features/learn/upvc/upvc.component';
import { AluminiumComponent } from './features/learn/aluminium/aluminium.component';
import { GlassComponent } from './features/learn/glass/glass.component';
import { HardwareComponent } from './features/learn/hardware/hardware.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'learn/upvc', component: UpvcComponent },
  { path: 'learn/aluminium', component: AluminiumComponent },
  { path: 'learn/glass', component: GlassComponent },
  { path: 'learn/hardware', component: HardwareComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'progress', component: ProgressComponent },
  { path: '**', redirectTo: 'home' }
];
