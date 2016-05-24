import {bootstrap} from 'angular2/platform/browser';
import {HomeComponent} from './home-page/home.component';
import 'rxjs/Rx';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {YtubeService} from './services/tube.service';

bootstrap(HomeComponent, [ROUTER_PROVIDERS, YtubeService]);






