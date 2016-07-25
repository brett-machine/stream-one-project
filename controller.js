/* add the routing controller first
then add the home, about and contact controllers passing
in the title via $scope.title*/
 
angular.module('mybandControllers',[])
    .controller('HomeController', function($scope) {
 
        $scope.title ="Home"
    })
    .controller('AboutController', function($scope) {
 
        $scope.title ="About"
    })
    .controller('MusicController', function($scope) {
 
        $scope.title ="Music"
    })
    .controller('GigsController', function($scope) {
 
        $scope.title ="Gigs"
    })   
    .controller('ThebandController', function($scope) {
 
        $scope.title ="The Band"
    })
    .controller('ContactController', function($scope) {
 
        $scope.title ="Contact"
    })
    .controller('RemoteGigsController',function($scope,RemoteGigsService) {  
       
        $scope.student = {};
        RemoteGigsService.getStudent()
                        .then( function(result) {
                              //promise complete
                              $scope.gigs=result.data;
                              })
                        .catch( function(error) { console.log('error', error)});
 
        $scope.greeting = function(){
                return "Upcoming Tours" + $scope.gigs.date + " " + $scope.gigs.venue;
        }
        $scope.showResults = function(){
        return ($scope.results ? $scope.results=false : $scope.results=true)
        }
 
    });

    .controller('FooterController', function($scope) {
  $scope.title = "Find Us";
  $scope.maps = [{
    address: 'Trinity College Dublin, Dublin',
    zoom: 14,
    width: 400
  }, {
    address: '51st Street, New York, New York',
    zoom: 14,
    width: 400
  }];
  $scope.map = $scope.maps[0];
});
 
    