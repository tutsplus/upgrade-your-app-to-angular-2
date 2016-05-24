
var tbApp = angular.module('tubeApp', ['ui.router']);

tbApp.config(function($stateProvider,$urlRouterProvider) {
    
    
    
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'app/modules/home-page/home.html'
    });
    
    $stateProvider.state('video', {
        url: '/video',
        templateUrl: 'app/modules/video-page/video.html'
    });
    
    $stateProvider.state('single', {
        url: '/single/:id',
        templateUrl: 'app/modules/video-page/single-video.html'
    });
    
    $urlRouterProvider.otherwise("/");
});

angular.element(document).ready(function() {
   angular.bootstrap(document.body, [ tbApp.name ]);
});











