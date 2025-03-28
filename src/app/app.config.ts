import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

export const appConfig = {
  providers: [
    importProvidersFrom(
      MatSidenavModule,
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      MatListModule
    ),
    provideHttpClient(),
    provideRouter([])
  ]
};
