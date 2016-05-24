System.register(['angular2/core', '../services/tube.service', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, tube_service_1, http_1;
    var SearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tube_service_1_1) {
                tube_service_1 = tube_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            SearchComponent = (function () {
                function SearchComponent(_ytubeService) {
                    this._ytubeService = _ytubeService;
                    this.onSearch = new core_1.EventEmitter();
                }
                SearchComponent.prototype.sendSearch = function (srchText) {
                    this.onSearch.emit(srchText);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SearchComponent.prototype, "onSearch", void 0);
                SearchComponent = __decorate([
                    core_1.Component({
                        selector: 'my-search',
                        templateUrl: 'app/modules/search-bar/search.html',
                        providers: [http_1.HTTP_PROVIDERS, tube_service_1.YtubeService]
                    }), 
                    __metadata('design:paramtypes', [tube_service_1.YtubeService])
                ], SearchComponent);
                return SearchComponent;
            }());
            exports_1("SearchComponent", SearchComponent);
        }
    }
});
//# sourceMappingURL=search.component.js.map