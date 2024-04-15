import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Importa tu AppModule aquí

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
