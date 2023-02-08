import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { MainPageComponent } from './app/main-page/main-page.component';




/* platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
 */
bootstrapApplication(MainPageComponent);
//bootstrapApplication(AppComponent).catch((err) => console.error(err));