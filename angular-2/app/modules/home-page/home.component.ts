import {Component} from 'angular2/core';
import {VideoComponent} from '../video-page/video.component';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {SearchComponent} from '../search-bar/search.component';
import {YtubeService} from '../services/tube.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'my-app',
    templateUrl:'app/modules/home-page/home.html',
    directives: [ROUTER_DIRECTIVES, SearchComponent],
    providers: [YtubeService, HTTP_PROVIDERS]    
})

@RouteConfig ([
    {path: '/', name: 'Video', component: VideoComponent, useAsDefault: true},
    {path: '/:search', name: 'Single', component: VideoComponent}
])

export class HomeComponent {
    
    constructor (private _ytubeService: YtubeService, private _router: Router) {}   
    
    onSearch(searchText: string) {
        this._ytubeService.setSearch(searchText);
        this._router.navigate(['Single', { search: searchText }])
    }
    
}