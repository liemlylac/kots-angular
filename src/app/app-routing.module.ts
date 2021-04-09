import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  // {
  //   path: 'feature-list',
  //   loadChildren: () =>
  //     import('./pages/feature-list/feature-list.module').then(
  //       (m) => m.FeatureListModule
  //     )
  // },
  // {
  //   path: 'settings',
  //   loadChildren: () =>
  //     import('./pages/settings/settings.module').then(
  //       (m) => m.SettingsModule
  //     )
  // },
  // {
  //   path: 'examples',
  //   loadChildren: () =>
  //     import('./pages/examples/examples.module').then(
  //       (m) => m.ExamplesModule
  //     )
  // },
  {
    path: '**',
    redirectTo: 'about'
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
