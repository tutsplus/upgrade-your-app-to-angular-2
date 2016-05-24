import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Ytube} from '../video-page/tube';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class YtubeService {
    fullURL: string;
    constructor (private http: Http) {}
    
    private srch = '';

    private tubeURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=';

    private APIkey =''; // Your API key goes here
    
    setSearch(str: string) {
        this.srch = str;  
    }

    getVids(){
        if(!this.srch){
            this.srch = 'cats';
        }

        this.fullURL =  `${this.tubeURL}${this.srch}&type=video&&key=${this.APIkey}`; 
        
        return this.http.get(this.fullURL)
            .map(res => <Ytube[]> res.json().items)
            .do(data => console.log(data))
            .catch(this.errorHandler);
    }
    
    private errorHandler (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
    getSearch(){
        return this.srch;
    }
}




















