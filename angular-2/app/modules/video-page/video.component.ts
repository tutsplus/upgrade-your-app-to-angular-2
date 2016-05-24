import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {HTTP_PROVIDERS} from 'angular2/http';
import {Ytube} from './tube';
import {YtubeService} from '../services/tube.service';

@Component({
  templateUrl: 'app/modules/video-page/video.html',
  providers: [HTTP_PROVIDERS,YtubeService]
})

export class VideoComponent implements OnInit {
  errorMessage: string;
  videos: Ytube[];
  selectedID:string;
  vidLink:string;
  searched: string;
  
  constructor (private _ytubeService: YtubeService, private _routeParams: RouteParams) {}
  
  ngOnInit() { this.getVideos();}
  
  vidSelect(video: string) {
        this.selectedID = video;
        this.vidLink = `https://www.youtube.com/embed/${this.selectedID}`;
  }
  
  getVideos() {
    
    if (this._routeParams.get('search')) {
      let searchString = this._routeParams.get('search')
      this._ytubeService.setSearch(searchString);
    }

	  this._ytubeService.getVids()
      		.subscribe(
        		videos => this.videos = videos,
        		error => this.errorMessage = <any>error
      		);
	  this.searched = this._ytubeService.getSearch();
  }
  
  goBack(){
    this.vidLink = null;
  }

  
}