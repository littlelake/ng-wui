import { Routes } from '@angular/router';

import { Home } from './home/home';
import { ButtonDemo } from './button/button-demo';
import { DialogDemo } from './dialog/dialog-demo';
import { InputDemo } from './input/input-demo';
// import { PaginationDemo } from './pagination/pagination-demo';


export const ROUTES: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'button', component: ButtonDemo },
  { path: 'dialog', component: DialogDemo },
  { path: 'input', component: InputDemo },
  // { path: 'pagination', component: PaginationDemo },
];
