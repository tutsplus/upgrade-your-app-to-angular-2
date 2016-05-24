import {Component, EventEmitter, Output} from 'angular2/core';
import {YtubeService} from '../services/tube.service';
import {HTTP_PROVIDERS} from 'angular2/http'

@Component({
    selector: 'my-search',
    templateUrl:'app/modules/search-bar/search.html',
    providers: [HTTP_PROVIDERS,YtubeService]
})

export class SearchComponent {
    @Output() onSearch = new EventEmitter<string>();
    
    constructor (private _ytubeService: YtubeService) {}
    
    sendSearch(srchText: string) {
        this.onSearch.emit(srchText);
    }
}





