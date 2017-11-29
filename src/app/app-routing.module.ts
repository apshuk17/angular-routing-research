import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrisislistComponent } from './crisis-center/crisislist/crisislist.component';
import { HerolistComponent } from './heroes/herolist/herolist.component';
import { PagenotfoundComponent } from './pagenotfound.component';

const APP_ROUTES: Routes = [
    { path: 'crisis-center', component: CrisislistComponent },
    { path: '', redirectTo: '/heroes', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
