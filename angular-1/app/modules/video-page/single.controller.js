tbApp.controller('single.controller', function($scope, $state, $stateParams, $sce){
    $scope.vidID = $stateParams.id;
    $scope.tmpVid = "https://www.youtube.com/embed/" + $scope.vidID;
    $scope.myVideo = $sce.trustAsResourceUrl($scope.tmpVid);     
    
});