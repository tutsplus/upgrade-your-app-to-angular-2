System.register(['angular2/platform/browser', './home-page/home.component', 'rxjs/Rx', 'angular2/router', './services/tube.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, home_component_1, router_1, tube_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (tube_service_1_1) {
                tube_service_1 = tube_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(home_component_1.HomeComponent, [router_1.ROUTER_PROVIDERS, tube_service_1.YtubeService]);
        }
    }
});
//# sourceMappingURL=app.module.js.map