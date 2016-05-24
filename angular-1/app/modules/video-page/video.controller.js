tbApp.controller('video.controller', function($scope, $state, $stateParams, tubeService){
    
    
    
    $scope.getVideos = function() {
        
        
        tubeService.getVids().then(function(data){
           
            var vidArr = [];
                for (var i = data.items.length -1; i>=0; i--){
                    vidArr.push({
                        id: data.items[i].id.videoId,
                        title: data.items[i].snippet.title,
                        description: data.items[i].snippet.description,
                        thumbnail: data.items[i].snippet.thumbnails.default.url
                    });
                }    
                $scope.srchString = tubeService.getSearch();
                
                
                $scope.videos = vidArr;
                
       
        }, function() {    
            $scope.fail = "Could not find videos";
            console.log($scope.fail);    
        
    


        });
    };
    
    
    
});