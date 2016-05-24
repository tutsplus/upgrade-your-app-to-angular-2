System.register(['angular2/core', 'angular2/router', 'angular2/http', '../services/tube.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1, tube_service_1;
    var VideoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (tube_service_1_1) {
                tube_service_1 = tube_service_1_1;
            }],
        execute: function() {
            VideoComponent = (function () {
                function VideoComponent(_ytubeService, _routeParams) {
                    this._ytubeService = _ytubeService;
                    this._routeParams = _routeParams;
                }
                VideoComponent.prototype.ngOnInit = function () { this.getVideos(); };
                VideoComponent.prototype.vidSelect = function (video) {
                    this.selectedID = video;
                    this.vidLink = "https://www.youtube.com/embed/" + this.selectedID;
                };
                VideoComponent.prototype.getVideos = function () {
                    var _this = this;
                    if (this._routeParams.get('search')) {
                        var searchString = this._routeParams.get('search');
                        this._ytubeService.setSearch(searchString);
                    }
                    this._ytubeService.getVids()
                        .subscribe(function (videos) { return _this.videos = videos; }, function (error) { return _this.errorMessage = error; });
                    this.searched = this._ytubeService.getSearch();
                };
                VideoComponent.prototype.goBack = function () {
                    this.vidLink = null;
                };
                VideoComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/modules/video-page/video.html',
                        providers: [http_1.HTTP_PROVIDERS, tube_service_1.YtubeService]
                    }), 
                    __metadata('design:paramtypes', [tube_service_1.YtubeService, router_1.RouteParams])
                ], VideoComponent);
                return VideoComponent;
            }());
            exports_1("VideoComponent", VideoComponent);
        }
    }
});
//# sourceMappingURL=video.component.js.map