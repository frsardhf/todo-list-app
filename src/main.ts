import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Provides the HttpClient for your app
    importProvidersFrom(ReactiveFormsModule),
    // other providers
  ]
}).catch(err => console.error(err));
