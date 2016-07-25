angular.module('GigsServices').factory('RemoteGigsService',function($http) {
   //  return Gigs Service
   return  { getGigs: getGigs};
 
   function getGigs() {
                return $http.get('Stream1Project/js/gigs.json'); // returns a promise
        }
});