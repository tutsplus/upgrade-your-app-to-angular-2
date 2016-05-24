tbApp.factory('tubeService', function($http){

    var srch = '';

    var tubeURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=';

    
    
    var tubeService = {
        setSearch: function (str) {
            srch = str;  
        },
        
        getVids: function () {
            
            //API key goes here
            var APIkey ='';
            
            var fullURL = tubeURL + srch + '&type=video&&key=' + APIkey;
            
                      
            return $http.get(fullURL).then(function(response){
                return response.data;
            });
        },
        
        getSearch: function () {
            return srch;
        }
           
        
    };
    
    return tubeService;
    
    
});