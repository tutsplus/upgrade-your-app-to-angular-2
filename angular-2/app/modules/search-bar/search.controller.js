


tbApp.controller('search.controller', function($scope,$state, tubeService){
    $scope.srch;
    
    var searched = false;
    
    $scope.setSearch = function (set){
        tubeService.setSearch(set);
        
        if (searched){
            $state.reload('video');
        } else {
            $state.go('video');
        }
        
        searched = true;
    };    

});




