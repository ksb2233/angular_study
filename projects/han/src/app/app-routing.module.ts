import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/main',
                pathMatch: 'full'
            },
            {
                path: 'main',
                loadChildren: () => import('./main/main.module').then(m => m.MainModule)
            },
            {
                path: 'search',
                loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
            },
            {
                path: 'weather',
                loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule)
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
