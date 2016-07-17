angular.module('routingControllers',[])
    .controller('HomeController', function($scope) {
 
        $scope.title ="home"
    })
    .controller('AboutController', function($scope) {
 
        $scope.title ="About"
    })
    .controller('MusicController', function($scope) {
 
        $scope.title ="Music"
    });
    .controller('GigsController', function($scope) {
 
        $scope.title ="Gigs"
    });
    .controller('ThebandController', function($scope) {
 
        $scope.title ="The Band"
    });
    .controller('ContactController', function($scope) {
 
        $scope.title ="Contact"
    });