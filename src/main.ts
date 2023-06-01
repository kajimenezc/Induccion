import { MainPageModule } from './main-page/main-page.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Destruir la plataforma existente si existe
platformBrowserDynamic().destroy();

platformBrowserDynamic()
  .bootstrapModule(MainPageModule)
  .catch((err) => console.error(err));
