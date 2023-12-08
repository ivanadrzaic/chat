import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
// import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppModule);

export default bootstrap;
